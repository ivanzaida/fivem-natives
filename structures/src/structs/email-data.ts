import { GamerHandle } from './gamer-handle'
import { StringRef } from '../types/string-ref';

export class EmailData {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(1312))) {
		if (dataView.byteLength !== 1312) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get id(): number {
		return this.dataView.getInt32(0, true)
	}

	public get createPosixTime(): number {
		return this.dataView.getInt32(8, true)
	}

	public get senderName(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(16, 31))).value
	}

	public get senderHandle(): GamerHandle {
		return new GamerHandle(new DataView(this.dataView.buffer.slice(48, 104)))
	}

	public get subject(): string[] {
		return [
			new StringRef(new DataView(this.dataView.buffer.slice(152, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(216, 63))).value
		]
	}

	public get contents(): string[] {
		return [
			new StringRef(new DataView(this.dataView.buffer.slice(280, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(344, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(408, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(472, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(536, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(600, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(664, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(728, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(792, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(856, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(920, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(984, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(1048, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(1112, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(1176, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(1240, 63))).value
		]
	}

	public get image(): number {
		return this.dataView.getInt32(1304, true)
	}
}