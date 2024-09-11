import { StringRef } from '../types/string-ref';

export class Leaderboard2Group {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(64))) {
		if (dataView.byteLength !== 64) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get category(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(0, 31))).value
	}

	public get id(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(32, 31))).value
	}
}