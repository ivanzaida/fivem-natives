export class YachtEnded {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(184))) {
		if (dataView.byteLength !== 184) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get bossId1(): number {
		return this.dataView.getInt32(0, true)
	}

	public get bossId2(): number {
		return this.dataView.getInt32(8, true)
	}

	public get matchId1(): number {
		return this.dataView.getInt32(16, true)
	}

	public get matchId2(): number {
		return this.dataView.getInt32(24, true)
	}

	public get missionId(): number {
		return this.dataView.getInt32(32, true)
	}

	public get missionTypeId(): number {
		return this.dataView.getInt32(40, true)
	}

	public get isboss(): number {
		return this.dataView.getInt32(48, true)
	}

	public get bosstype(): number {
		return this.dataView.getInt32(56, true)
	}

	public get playerrole(): number {
		return this.dataView.getInt32(64, true)
	}

	public get playerParticipated(): number {
		return this.dataView.getInt32(72, true)
	}

	public get won(): number {
		return this.dataView.getInt32(80, true)
	}

	public get launchMethod(): number {
		return this.dataView.getInt32(88, true)
	}

	public get endingReason(): number {
		return this.dataView.getInt32(96, true)
	}

	public get cashEarned(): number {
		return this.dataView.getInt32(104, true)
	}

	public get rpEarned(): number {
		return this.dataView.getInt32(112, true)
	}

	public get bossKilled(): number {
		return this.dataView.getInt32(120, true)
	}

	public get goonsKilled(): number {
		return this.dataView.getInt32(128, true)
	}

	public get yachtLocation(): number {
		return this.dataView.getInt32(136, true)
	}

	public get targetskilled(): number {
		return this.dataView.getInt32(144, true)
	}

	public get timetakentocomplete(): number {
		return this.dataView.getInt32(152, true)
	}

	public get playersleftinprogress(): number {
		return this.dataView.getInt32(160, true)
	}

	public get waterBombs(): number {
		return this.dataView.getInt32(168, true)
	}

	public get lockOn(): number {
		return this.dataView.getInt32(176, true)
	}
}