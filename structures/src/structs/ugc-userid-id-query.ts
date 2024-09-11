import { StringRef } from '../types/string-ref';

export class UgcUseridIdQuery {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(1024))) {
		if (dataView.byteLength !== 1024) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get userID(): string[] {
		return [
			new StringRef(new DataView(this.dataView.buffer.slice(0, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(64, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(128, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(192, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(256, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(320, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(384, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(448, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(512, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(576, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(640, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(704, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(768, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(832, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(896, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(960, 63))).value
		]
	}
}