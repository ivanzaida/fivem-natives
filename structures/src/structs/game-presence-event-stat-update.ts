import { StringRef } from '../types/string-ref';

export class GamePresenceEventStatUpdate {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(160))) {
		if (dataView.byteLength !== 160) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get statHash(): number {
		return this.dataView.getInt32(0, true)
	}

	public get fromGamer(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(8, 63))).value
	}

	public get value(): number {
		return this.dataView.getInt32(72, true)
	}

	public get fValue(): number {
		return this.dataView.getFloat32(80, true)
	}

	public get value2(): number {
		return this.dataView.getInt32(88, true)
	}

	public get stringValue(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(96, 63))).value
	}
}