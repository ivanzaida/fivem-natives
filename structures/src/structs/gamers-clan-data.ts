import { GamerHandle } from './gamer-handle'
import { StringRef } from '../types/string-ref';

export class GamersClanData {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(152))) {
		if (dataView.byteLength !== 152) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get gamerHandle(): GamerHandle {
		return new GamerHandle(new DataView(this.dataView.buffer.slice(0, 104)))
	}

	public get clanId(): number {
		return this.dataView.getInt32(104, true)
	}

	public get clanName(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(112, 31))).value
	}

	public get clanTag(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(144, 7))).value
	}
}