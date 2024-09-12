import { GamerHandle } from './gamer-handle'
import { StringRef } from '../types/string-ref';

export class TransitionStringEvent {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(144))) {
		if (dataView.byteLength !== 144) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get gamer(): GamerHandle {
		return new GamerHandle(new DataView(this.dataView.buffer.slice(0, 104)))
	}

	public get parameterId(): number {
		return this.dataView.getInt32(104, true)
	}

	public get parameter(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(112, 31))).value
	}
}