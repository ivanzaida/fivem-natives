import { StringRef } from '../types/string-ref';

export class NjvsVote {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(120))) {
		if (dataView.byteLength !== 120) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get mid(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(0, 31))).value
	}

	public get numPlayers(): number {
		return this.dataView.getInt32(32, true)
	}

	public get voteChoice(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(40, 31))).value
	}

	public get result(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(72, 31))).value
	}

	public get timeOnline(): number {
		return this.dataView.getInt32(104, true)
	}

	public get voteDiff(): boolean {
		return this.dataView.getInt8(112) === 1;
	}
}