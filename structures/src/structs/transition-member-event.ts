import { GamerHandle } from './gamer-handle'
import { StringRef } from '../types/string-ref';

export class TransitionMemberEvent {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(176))) {
		if (dataView.byteLength !== 176) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get gamerTag(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(0, 63))).value
	}

	public get gamer(): GamerHandle {
		return new GamerHandle(new DataView(this.dataView.buffer.slice(64, 104)))
	}

	public get characterRank(): number {
		return this.dataView.getInt32(168, true)
	}
}