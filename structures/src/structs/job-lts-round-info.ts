export class JobLtsRoundInfo {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(200))) {
		if (dataView.byteLength !== 200) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get roundNumber(): number {
		return this.dataView.getInt32(0, true)
	}

	public get roundsplayed(): number {
		return this.dataView.getInt32(8, true)
	}

	public get cash(): number {
		return this.dataView.getInt32(16, true)
	}

	public get betCash(): number {
		return this.dataView.getInt32(24, true)
	}

	public get cashStart(): number {
		return this.dataView.getInt32(32, true)
	}

	public get cashEnd(): number {
		return this.dataView.getInt32(40, true)
	}

	public get missionLaunch(): number {
		return this.dataView.getInt32(48, true)
	}

	public get m_1stHashMac(): number {
		return this.dataView.getInt32(56, true)
	}

	public get m_1stPosixTime(): number {
		return this.dataView.getInt32(64, true)
	}

	public get xp(): number {
		return this.dataView.getInt32(72, true)
	}

	public get kills(): number {
		return this.dataView.getInt32(80, true)
	}

	public get deaths(): number {
		return this.dataView.getInt32(88, true)
	}

	public get suicides(): number {
		return this.dataView.getInt32(96, true)
	}

	public get rank(): number {
		return this.dataView.getInt32(104, true)
	}

	public get crewId(): number {
		return this.dataView.getInt32(112, true)
	}

	public get betWon(): number {
		return this.dataView.getInt32(120, true)
	}

	public get teamId(): number {
		return this.dataView.getInt32(128, true)
	}

	public get matchResult(): number {
		return this.dataView.getInt32(136, true)
	}

	public get jpEarned(): number {
		return this.dataView.getInt32(144, true)
	}

	public get playlistID(): number {
		return this.dataView.getInt32(152, true)
	}

	public get leftInProgress(): boolean {
		return this.dataView.getInt8(160) === 1;
	}

	public get playlistHashMac(): number {
		return this.dataView.getInt32(168, true)
	}

	public get playlistPosixTime(): number {
		return this.dataView.getInt32(176, true)
	}

	public get outfitStyle(): number {
		return this.dataView.getInt32(184, true)
	}

	public get outfitChoiceType(): number {
		return this.dataView.getInt32(192, true)
	}
}