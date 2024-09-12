export class Casinometriclight {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(128))) {
		if (dataView.byteLength !== 128) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get matchType(): number {
		return this.dataView.getInt32(0, true)
	}

	public get tableId(): number {
		return this.dataView.getInt32(8, true)
	}

	public get endReason(): number {
		return this.dataView.getInt32(16, true)
	}

	public get chipsDelta(): number {
		return this.dataView.getInt32(24, true)
	}

	public get finalChipBalance(): number {
		return this.dataView.getInt32(32, true)
	}

	public get duration(): number {
		return this.dataView.getInt32(40, true)
	}

	public get viewedLegalScreen(): boolean {
		return this.dataView.getInt8(48) === 1;
	}

	public get betAmount1(): number {
		return this.dataView.getInt32(56, true)
	}

	public get betAmount2(): number {
		return this.dataView.getInt32(64, true)
	}

	public get cheatCount(): number {
		return this.dataView.getInt32(72, true)
	}

	public get isHost(): boolean {
		return this.dataView.getInt8(80) === 1;
	}

	public get hostId(): number {
		return this.dataView.getInt32(88, true)
	}

	public get handsPlayed(): number {
		return this.dataView.getInt32(96, true)
	}

	public get winCount(): number {
		return this.dataView.getInt32(104, true)
	}

	public get loseCount(): number {
		return this.dataView.getInt32(112, true)
	}

	public get membership(): number {
		return this.dataView.getInt32(120, true)
	}
}