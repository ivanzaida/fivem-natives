import { StringRef } from '../types/string-ref';

export class CrewRankChanged {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(56))) {
		if (dataView.byteLength !== 56) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get clanId(): number {
		return this.dataView.getInt32(0, true)
	}

	public get rankOrder(): number {
		return this.dataView.getInt32(8, true)
	}

	public get promotion(): boolean {
		return this.dataView.getInt8(16) === 1;
	}

	public get rankName(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(24, 31))).value
	}
}