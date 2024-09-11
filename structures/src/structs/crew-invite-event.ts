import { StringRef } from '../types/string-ref';

export class CrewInviteEvent {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(88))) {
		if (dataView.byteLength !== 88) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get clanId(): number {
		return this.dataView.getInt32(0, true)
	}

	public get crewName(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(8, 31))).value
	}

	public get crewTag(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(40, 7))).value
	}

	public get rankName(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(48, 31))).value
	}

	public get hasMessage(): boolean {
		return this.dataView.getInt8(80) === 1;
	}
}