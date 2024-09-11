import { GamerHandle } from './gamer-handle'
import { StringRef } from '../types/string-ref';

export class InviteViaPresenceEvent {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(224))) {
		if (dataView.byteLength !== 224) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get inviter(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(0, 63))).value
	}

	public get inviter2(): GamerHandle {
		return new GamerHandle(new DataView(this.dataView.buffer.slice(64, 104)))
	}

	public get contentID(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(168, 23))).value
	}

	public get playlistLength(): number {
		return this.dataView.getInt32(192, true)
	}

	public get playlistCurrent(): number {
		return this.dataView.getInt32(200, true)
	}

	public get scTv(): boolean {
		return this.dataView.getInt8(208) === 1;
	}

	public get inviteID(): number {
		return this.dataView.getInt32(216, true)
	}
}