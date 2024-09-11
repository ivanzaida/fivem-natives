import { NetworkClanDesc } from './network-clan-desc'
import { StringRef } from '../types/string-ref';

export class CrewRecvdInviteData {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(304))) {
		if (dataView.byteLength !== 304) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get clanDesc(): NetworkClanDesc {
		return new NetworkClanDesc(new DataView(this.dataView.buffer.slice(0, 176)))
	}

	public get gTag(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(176, 63))).value
	}

	public get msg(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(240, 63))).value
	}
}