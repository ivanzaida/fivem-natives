import { StringRef } from '../types/string-ref';

export class UgcPathsStruct {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(128))) {
		if (dataView.byteLength !== 128) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get tl63Path(): string[] {
		return [
			new StringRef(new DataView(this.dataView.buffer.slice(0, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(64, 63))).value
		]
	}
}