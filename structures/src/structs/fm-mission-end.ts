export class FmMissionEnd {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(232))) {
		if (dataView.byteLength !== 232) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get groupID(): number {
		return this.dataView.getInt32(0, true)
	}

	public get missionCategory(): number {
		return this.dataView.getInt32(8, true)
	}

	public get missionName(): number {
		return this.dataView.getInt32(16, true)
	}

	public get sessionID(): number {
		return this.dataView.getInt32(24, true)
	}

	public get type(): number {
		return this.dataView.getInt32(32, true)
	}

	public get location(): number {
		return this.dataView.getInt32(40, true)
	}

	public get launchMethod(): number {
		return this.dataView.getInt32(48, true)
	}

	public get bossId1(): number {
		return this.dataView.getInt32(56, true)
	}

	public get bossId2(): number {
		return this.dataView.getInt32(64, true)
	}

	public get bosstype(): number {
		return this.dataView.getInt32(72, true)
	}

	public get launcherRank(): number {
		return this.dataView.getInt32(80, true)
	}

	public get playerRole(): number {
		return this.dataView.getInt32(88, true)
	}

	public get playerParticipated(): boolean {
		return this.dataView.getInt8(96) === 1;
	}

	public get timeTakenToComplete(): number {
		return this.dataView.getInt32(104, true)
	}

	public get timeLimit(): number {
		return this.dataView.getInt32(112, true)
	}

	public get won(): boolean {
		return this.dataView.getInt8(120) === 1;
	}

	public get endingReason(): number {
		return this.dataView.getInt32(128, true)
	}

	public get isRivalParty(): boolean {
		return this.dataView.getInt8(136) === 1;
	}

	public get cashEarned(): number {
		return this.dataView.getInt32(144, true)
	}

	public get rpEarned(): number {
		return this.dataView.getInt32(152, true)
	}

	public get deaths(): number {
		return this.dataView.getInt32(160, true)
	}

	public get targetsKilled(): number {
		return this.dataView.getInt32(168, true)
	}

	public get innocentsKilled(): number {
		return this.dataView.getInt32(176, true)
	}

	public get properties(): number {
		return this.dataView.getInt32(184, true)
	}

	public get properties2(): number {
		return this.dataView.getInt32(192, true)
	}

	public get failedStealth(): boolean {
		return this.dataView.getInt8(200) === 1;
	}

	public get difficulty(): number {
		return this.dataView.getInt32(208, true)
	}

	public get bonusKillMethod(): number {
		return this.dataView.getInt32(216, true)
	}

	public get bonusKillComplete(): number {
		return this.dataView.getInt32(224, true)
	}
}