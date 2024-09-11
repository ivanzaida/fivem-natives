import { StringRef } from '../types/string-ref';

export class PresenceTriggerEvent {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(88))) {
		if (dataView.byteLength !== 88) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get eventNameHash(): number {
		return this.dataView.getInt32(0, true)
	}

	public get eventParam1(): number {
		return this.dataView.getInt32(8, true)
	}

	public get eventParam2(): number {
		return this.dataView.getInt32(16, true)
	}

	public get eventString(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(24, 63))).value
	}
}