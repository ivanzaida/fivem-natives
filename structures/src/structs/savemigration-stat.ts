import { StringRef } from '../types/string-ref';

export class SavemigrationStat {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(128))) {
		if (dataView.byteLength !== 128) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get name(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(0, 63))).value
	}

	public get value(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(64, 63))).value
	}
}