export class MissionEnd {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(448))) {
		if (dataView.byteLength !== 448) {
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

	public get starterBossId1(): number {
		return this.dataView.getInt32(48, true)
	}

	public get starterBossId2(): number {
		return this.dataView.getInt32(56, true)
	}

	public get playerParticipated(): number {
		return this.dataView.getInt32(64, true)
	}

	public get timeStart(): number {
		return this.dataView.getInt32(72, true)
	}

	public get timeEnd(): number {
		return this.dataView.getInt32(80, true)
	}

	public get won(): number {
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

	public get targetsKilled(): number {
		return this.dataView.getInt32(120, true)
	}

	public get innocentsKilled(): number {
		return this.dataView.getInt32(128, true)
	}

	public get deaths(): number {
		return this.dataView.getInt32(136, true)
	}

	public get launcherRank(): number {
		return this.dataView.getInt32(144, true)
	}

	public get mCPointsEarnedFromWinning(): number {
		return this.dataView.getInt32(152, true)
	}

	public get timeTakenToComplete(): number {
		return this.dataView.getInt32(160, true)
	}

	public get timeTakenForObjective(): number {
		return this.dataView.getInt32(168, true)
	}

	public get propertyDamageValue(): number {
		return this.dataView.getInt32(176, true)
	}

	public get longestWheelieTime(): number {
		return this.dataView.getInt32(184, true)
	}

	public get numberOfCarsKicked(): number {
		return this.dataView.getInt32(192, true)
	}

	public get playersLeftInProgress(): number {
		return this.dataView.getInt32(200, true)
	}

	public get location(): number {
		return this.dataView.getInt32(208, true)
	}

	public get invitesSent(): number {
		return this.dataView.getInt32(216, true)
	}

	public get invitesAccepted(): number {
		return this.dataView.getInt32(224, true)
	}

	public get bossKilled(): number {
		return this.dataView.getInt32(232, true)
	}

	public get goonsKilled(): number {
		return this.dataView.getInt32(240, true)
	}

	public get packagesGathered(): number {
		return this.dataView.getInt32(248, true)
	}

	public get friendlyAiDeaths(): number {
		return this.dataView.getInt32(256, true)
	}

	public get raceToLocationLaunched(): number {
		return this.dataView.getInt32(264, true)
	}

	public get cratesDestroyed(): number {
		return this.dataView.getInt32(272, true)
	}

	public get aIKilled(): number {
		return this.dataView.getInt32(280, true)
	}

	public get alliesSpawned(): number {
		return this.dataView.getInt32(288, true)
	}

	public get alliesDroppedOff(): number {
		return this.dataView.getInt32(296, true)
	}

	public get vansSpawned(): number {
		return this.dataView.getInt32(304, true)
	}

	public get vansDestroyed(): number {
		return this.dataView.getInt32(312, true)
	}

	public get typeOfBusinesS(): number {
		return this.dataView.getInt32(320, true)
	}

	public get otherBusinessOwned(): number {
		return this.dataView.getInt32(328, true)
	}

	public get startVolume(): number {
		return this.dataView.getInt32(336, true)
	}

	public get endVolume(): number {
		return this.dataView.getInt32(344, true)
	}

	public get startSupplyCapacity(): number {
		return this.dataView.getInt32(352, true)
	}

	public get endSupplyCapacity(): number {
		return this.dataView.getInt32(360, true)
	}

	public get suppliesDestroyed(): number {
		return this.dataView.getInt32(368, true)
	}

	public get suppliesDelivered(): number {
		return this.dataView.getInt32(376, true)
	}

	public get isMissionAfterFailedDefend(): number {
		return this.dataView.getInt32(384, true)
	}

	public get cashSpentOnResupplies(): number {
		return this.dataView.getInt32(392, true)
	}

	public get productDestroyed(): number {
		return this.dataView.getInt32(400, true)
	}

	public get productDelivered(): number {
		return this.dataView.getInt32(408, true)
	}

	public get upgradesOwned(): number {
		return this.dataView.getInt32(416, true)
	}

	public get fromHackerTruck(): number {
		return this.dataView.getInt32(424, true)
	}

	public get properties(): number {
		return this.dataView.getInt32(432, true)
	}

	public get properties2(): number {
		return this.dataView.getInt32(440, true)
	}
}