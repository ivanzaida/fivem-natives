import { GamerHandle } from './gamer-handle'
import { StringRef } from '../types/string-ref';

export class UgcStateUpdateData {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(312))) {
		if (dataView.byteLength !== 312) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get tl31MissionContentId(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(0, 31))).value
	}

	public get score(): number {
		return this.dataView.getInt32(32, true)
	}

	public get score2(): number {
		return this.dataView.getInt32(40, true)
	}

	public get tl31SenderGamerTag(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(48, 31))).value
	}

	public get senderGamer(): GamerHandle {
		return new GamerHandle(new DataView(this.dataView.buffer.slice(80, 104)))
	}

	public get tl31MissionName(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(184, 63))).value
	}

	public get tl31CoPlayerName(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(248, 31))).value
	}

	public get missionType(): number {
		return this.dataView.getInt32(280, true)
	}

	public get missionSubType(): number {
		return this.dataView.getInt32(288, true)
	}

	public get laps(): number {
		return this.dataView.getInt32(296, true)
	}

	public get swapSenderWithCoPlayer(): boolean {
		return this.dataView.getInt8(304) === 1;
	}
}