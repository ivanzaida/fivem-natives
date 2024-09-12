import { GamerHandle } from './gamer-handle'
import { ESessionType, EInviteFlags } from '../enums/'

export class InviteEvent {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(176))) {
		if (dataView.byteLength !== 176) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get inviter(): GamerHandle {
		return new GamerHandle(new DataView(this.dataView.buffer.slice(0, 104)))
	}

	public get gameMode(): number {
		return this.dataView.getInt32(104, true)
	}

	public get sessionType(): ESessionType {
		return this.dataView.getInt32(112, true) as ESessionType
	}

	public get isViaParty(): boolean {
		return this.dataView.getInt8(120) === 1;
	}

	public get aimType(): number {
		return this.dataView.getInt32(128, true)
	}

	public get activityType(): number {
		return this.dataView.getInt32(136, true)
	}

	public get activityId(): number {
		return this.dataView.getInt32(144, true)
	}

	public get isSctv(): boolean {
		return this.dataView.getInt8(152) === 1;
	}

	public get nFlags(): EInviteFlags {
		return this.dataView.getInt32(160, true) as EInviteFlags
	}

	public get numBosses(): number {
		return this.dataView.getInt32(168, true)
	}
}