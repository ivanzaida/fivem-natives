export class Casinometric {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(168))) {
		if (dataView.byteLength !== 168) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get gameType(): number {
		return this.dataView.getInt32(0, true)
	}

	public get matchType(): number {
		return this.dataView.getInt32(8, true)
	}

	public get tableId(): number {
		return this.dataView.getInt32(16, true)
	}

	public get handId(): number {
		return this.dataView.getInt32(24, true)
	}

	public get endReason(): number {
		return this.dataView.getInt32(32, true)
	}

	public get allIn(): boolean {
		return this.dataView.getInt8(40) === 1;
	}

	public get chipsDelta(): number {
		return this.dataView.getInt32(48, true)
	}

	public get finalChipBalance(): number {
		return this.dataView.getInt32(56, true)
	}

	public get totalPot(): number {
		return this.dataView.getInt32(64, true)
	}

	public get playersAtTable(): number {
		return this.dataView.getInt32(72, true)
	}

	public get viewedLegalScreen(): boolean {
		return this.dataView.getInt8(80) === 1;
	}

	public get ownPenthouse(): boolean {
		return this.dataView.getInt8(88) === 1;
	}

	public get betAmount1(): number {
		return this.dataView.getInt32(96, true)
	}

	public get betAmount2(): number {
		return this.dataView.getInt32(104, true)
	}

	public get winAmount(): number {
		return this.dataView.getInt32(112, true)
	}

	public get win(): boolean {
		return this.dataView.getInt8(120) === 1;
	}

	public get cheat(): boolean {
		return this.dataView.getInt8(128) === 1;
	}

	public get timePlayed(): number {
		return this.dataView.getInt32(136, true)
	}

	public get isHost(): boolean {
		return this.dataView.getInt8(144) === 1;
	}

	public get hostId(): number {
		return this.dataView.getInt32(152, true)
	}

	public get membership(): number {
		return this.dataView.getInt32(160, true)
	}
}