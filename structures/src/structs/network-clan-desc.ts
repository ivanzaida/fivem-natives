import { StringRef } from '../types/string-ref';

export class NetworkClanDesc {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(176))) {
		if (dataView.byteLength !== 176) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get id(): number {
		return this.dataView.getInt32(0, true)
	}

	public get clanName(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(8, 63))).value
	}

	public get clanTag(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(72, 7))).value
	}

	public get memberCount(): number {
		return this.dataView.getInt32(80, true)
	}

	public get isSystemClan(): number {
		return this.dataView.getInt32(88, true)
	}

	public get isOpenClan(): number {
		return this.dataView.getInt32(96, true)
	}

	public get rankName(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(104, 31))).value
	}

	public get rankOrder(): number {
		return this.dataView.getInt32(136, true)
	}

	public get createdTimePosix(): number {
		return this.dataView.getInt32(144, true)
	}

	public get clanColorRed(): number {
		return this.dataView.getInt32(152, true)
	}

	public get clanColorGreen(): number {
		return this.dataView.getInt32(160, true)
	}

	public get clanColorBlue(): number {
		return this.dataView.getInt32(168, true)
	}
}