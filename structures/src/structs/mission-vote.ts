import { StringRef } from '../types/string-ref';

export class MissionVote {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(80))) {
		if (dataView.byteLength !== 80) {
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

	public get voteChoice(): number {
		return this.dataView.getInt32(40, true)
	}

	public get result(): number {
		return this.dataView.getInt32(48, true)
	}

	public get timeOnline(): number {
		return this.dataView.getInt32(56, true)
	}

	public get voteDiff(): boolean {
		return this.dataView.getInt8(64) === 1;
	}

	public get endBoard(): boolean {
		return this.dataView.getInt8(72) === 1;
	}
}