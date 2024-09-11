import { StringRef } from '../types/string-ref';

export class UgcDescription {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(512))) {
		if (dataView.byteLength !== 512) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get textLabel(): string[] {
		return [
			new StringRef(new DataView(this.dataView.buffer.slice(0, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(64, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(128, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(192, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(256, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(320, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(384, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(448, 63))).value
		]
	}
}