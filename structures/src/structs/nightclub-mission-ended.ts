export class NightclubMissionEnded {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(336))) {
		if (dataView.byteLength !== 336) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get missionId(): number {
		return this.dataView.getInt32(0, true)
	}

	public get missionTypeId(): number {
		return this.dataView.getInt32(8, true)
	}

	public get matchId1(): number {
		return this.dataView.getInt32(16, true)
	}

	public get matchId2(): number {
		return this.dataView.getInt32(24, true)
	}

	public get bossId1(): number {
		return this.dataView.getInt32(32, true)
	}

	public get bossId2(): number {
		return this.dataView.getInt32(40, true)
	}

	public get playerParticipated(): number {
		return this.dataView.getInt32(48, true)
	}

	public get playerRole(): number {
		return this.dataView.getInt32(56, true)
	}

	public get timeStart(): number {
		return this.dataView.getInt32(64, true)
	}

	public get timeEnd(): number {
		return this.dataView.getInt32(72, true)
	}

	public get won(): number {
		return this.dataView.getInt32(80, true)
	}

	public get endingReason(): number {
		return this.dataView.getInt32(88, true)
	}

	public get cashEarned(): number {
		return this.dataView.getInt32(96, true)
	}

	public get rpEarned(): number {
		return this.dataView.getInt32(104, true)
	}

	public get targetsKilled(): number {
		return this.dataView.getInt32(112, true)
	}

	public get innocentsKilled(): number {
		return this.dataView.getInt32(120, true)
	}

	public get deaths(): number {
		return this.dataView.getInt32(128, true)
	}

	public get launcherRank(): number {
		return this.dataView.getInt32(136, true)
	}

	public get timeTakenToComplete(): number {
		return this.dataView.getInt32(144, true)
	}

	public get playersLeftInProgress(): number {
		return this.dataView.getInt32(152, true)
	}

	public get location(): number {
		return this.dataView.getInt32(160, true)
	}

	public get invitesSent(): number {
		return this.dataView.getInt32(168, true)
	}

	public get invitesAccepted(): number {
		return this.dataView.getInt32(176, true)
	}

	public get bossKilled(): number {
		return this.dataView.getInt32(184, true)
	}

	public get goonsKilled(): number {
		return this.dataView.getInt32(192, true)
	}

	public get suppliesStolen(): number {
		return this.dataView.getInt32(200, true)
	}

	public get suppliesOwned(): number {
		return this.dataView.getInt32(208, true)
	}

	public get productsOwned(): number {
		return this.dataView.getInt32(216, true)
	}

	public get ownnightclub(): boolean {
		return this.dataView.getInt8(224) === 1;
	}

	public get ownadditionalstaff(): number {
		return this.dataView.getInt32(232, true)
	}

	public get ownadditionalsecurity(): number {
		return this.dataView.getInt32(240, true)
	}

	public get ownhackertruck(): boolean {
		return this.dataView.getInt8(248) === 1;
	}

	public get quickrestart(): number {
		return this.dataView.getInt32(256, true)
	}

	public get bosstype(): number {
		return this.dataView.getInt32(264, true)
	}

	public get attacktype(): number {
		return this.dataView.getInt32(272, true)
	}

	public get collectiontype(): number {
		return this.dataView.getInt32(280, true)
	}

	public get enemygroup(): number {
		return this.dataView.getInt32(288, true)
	}

	public get ambushvehicle(): number {
		return this.dataView.getInt32(296, true)
	}

	public get deliverylocation(): number {
		return this.dataView.getInt32(304, true)
	}

	public get properties(): number {
		return this.dataView.getInt32(312, true)
	}

	public get properties2(): number {
		return this.dataView.getInt32(320, true)
	}

	public get launchMethod(): number {
		return this.dataView.getInt32(328, true)
	}
}