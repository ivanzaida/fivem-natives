import { GamerHandle } from './gamer-handle'
import { StringRef } from '../types/string-ref';

export class GamerInfo {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(168))) {
		if (dataView.byteLength !== 168) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get handle(): GamerHandle {
		return new GamerHandle(new DataView(this.dataView.buffer.slice(0, 104)))
	}

	public get name(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(104, 63))).value
	}
}