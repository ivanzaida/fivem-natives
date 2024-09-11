import { StringRef } from '../types/string-ref';

export class BountyInboxMsgData {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(96))) {
		if (dataView.byteLength !== 96) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get tl31FromGamerTag(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(0, 31))).value
	}

	public get tl31TargetGamerTag(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(32, 31))).value
	}

	public get outcome(): number {
		return this.dataView.getInt32(64, true)
	}

	public get cash(): number {
		return this.dataView.getInt32(72, true)
	}

	public get rank(): number {
		return this.dataView.getInt32(80, true)
	}

	public get time(): number {
		return this.dataView.getInt32(88, true)
	}
}