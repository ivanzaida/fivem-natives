import { StringRef } from '../types/string-ref';

export class GamerUserid {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(24))) {
		if (dataView.byteLength !== 24) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get name(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(0, 23))).value
	}
}