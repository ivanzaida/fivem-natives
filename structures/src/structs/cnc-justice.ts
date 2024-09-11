export class CncJustice {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(120))) {
		if (dataView.byteLength !== 120) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get matchId1(): number {
		return this.dataView.getInt32(0, true)
	}

	public get matchId2(): number {
		return this.dataView.getInt32(8, true)
	}

	public get roundNumber(): number {
		return this.dataView.getInt32(16, true)
	}

	public get stage(): number {
		return this.dataView.getInt32(24, true)
	}

	public get crookId(): number {
		return this.dataView.getInt32(32, true)
	}

	public get crookRole(): number {
		return this.dataView.getInt32(40, true)
	}

	public get crookProgRank(): number {
		return this.dataView.getInt32(48, true)
	}

	public get copRole(): number {
		return this.dataView.getInt32(56, true)
	}

	public get copProgRank(): number {
		return this.dataView.getInt32(64, true)
	}

	public get crookEndurance(): number {
		return this.dataView.getInt32(72, true)
	}

	public get vOffender(): boolean {
		return this.dataView.getInt8(80) === 1;
	}

	public get cashLost(): number {
		return this.dataView.getInt32(88, true)
	}

	public get wantedLvl(): number {
		return this.dataView.getInt32(96, true)
	}

	public get cashPenalty(): number {
		return this.dataView.getInt32(104, true)
	}

	public get type(): number {
		return this.dataView.getInt32(112, true)
	}
}