import { GamerHandle } from './gamer-handle'
import { StringRef } from '../types/string-ref';

export class NetworkTextMessage {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(168))) {
		if (dataView.byteLength !== 168) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get textMessage(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(0, 63))).value
	}

	public get fromGamer(): GamerHandle {
		return new GamerHandle(new DataView(this.dataView.buffer.slice(64, 104)))
	}
}