import { GamerHandle } from './gamer-handle'
import { StringRef } from '../types/string-ref';

export class PresenceInviteEvent {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(200))) {
		if (dataView.byteLength !== 200) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get inviter(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(0, 63))).value
	}

	public get gamer(): GamerHandle {
		return new GamerHandle(new DataView(this.dataView.buffer.slice(64, 104)))
	}

	public get activityType(): number {
		return this.dataView.getInt32(168, true)
	}

	public get activityID(): number {
		return this.dataView.getInt32(176, true)
	}

	public get inviteID(): number {
		return this.dataView.getInt32(184, true)
	}

	public get scTv(): boolean {
		return this.dataView.getInt8(192) === 1;
	}
}