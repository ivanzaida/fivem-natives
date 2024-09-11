import { GamerHandle } from './gamer-handle'
import { EInviteStatus } from '../enums/'
import { StringRef } from '../types/string-ref';

export class PresenceInviteReplyEvent {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(152))) {
		if (dataView.byteLength !== 152) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get inviter(): GamerHandle {
		return new GamerHandle(new DataView(this.dataView.buffer.slice(0, 104)))
	}

	public get nInviteStatus(): EInviteStatus {
		return this.dataView.getInt32(104, true) as EInviteStatus
	}

	public get characterRank(): number {
		return this.dataView.getInt32(112, true)
	}

	public get clanTag(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(120, 15))).value
	}

	public get decisionMade(): boolean {
		return this.dataView.getInt8(136) === 1;
	}

	public get decision(): boolean {
		return this.dataView.getInt8(144) === 1;
	}
}