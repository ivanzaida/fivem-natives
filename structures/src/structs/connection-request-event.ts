import { GamerHandle } from './gamer-handle'
import { StringRef } from '../types/string-ref';

export class ConnectionRequestEvent {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(136))) {
		if (dataView.byteLength !== 136) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get gamerTag(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(0, 31))).value
	}

	public get gamer(): GamerHandle {
		return new GamerHandle(new DataView(this.dataView.buffer.slice(32, 104)))
	}
}