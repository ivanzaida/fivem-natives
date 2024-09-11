import { GamerHandle } from './gamer-handle'
import { StringRef } from '../types/string-ref';

export class TransitionGamerInstruction {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(288))) {
		if (dataView.byteLength !== 288) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get fromGamer(): GamerHandle {
		return new GamerHandle(new DataView(this.dataView.buffer.slice(0, 104)))
	}

	public get toGamer(): GamerHandle {
		return new GamerHandle(new DataView(this.dataView.buffer.slice(104, 104)))
	}

	public get gamerTag(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(208, 63))).value
	}

	public get instruction(): number {
		return this.dataView.getInt32(272, true)
	}

	public get instructionParam(): number {
		return this.dataView.getInt32(280, true)
	}
}