export class FmHeistPrepEnded {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(368))) {
		if (dataView.byteLength !== 368) {
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

	public get heistSessionId(): number {
		return this.dataView.getInt32(184, true)
	}

	public get ownBase(): number {
		return this.dataView.getInt32(192, true)
	}

	public get ownCannon(): number {
		return this.dataView.getInt32(200, true)
	}

	public get ownSecurityRoom(): number {
		return this.dataView.getInt32(208, true)
	}

	public get ownLounge(): number {
		return this.dataView.getInt32(216, true)
	}

	public get ownLivingQuarters(): number {
		return this.dataView.getInt32(224, true)
	}

	public get ownTiltRotor(): number {
		return this.dataView.getInt32(232, true)
	}

	public get orbitalCannonShots(): number {
		return this.dataView.getInt32(240, true)
	}

	public get orbitalCannonKills(): number {
		return this.dataView.getInt32(248, true)
	}

	public get assasinationLevel1Calls(): number {
		return this.dataView.getInt32(256, true)
	}

	public get assasinationLevel2Calls(): number {
		return this.dataView.getInt32(264, true)
	}

	public get assasinationLevel3Calls(): number {
		return this.dataView.getInt32(272, true)
	}

	public get prepCompletionType(): number {
		return this.dataView.getInt32(280, true)
	}

	public get timeSpentHacking(): number {
		return this.dataView.getInt32(288, true)
	}

	public get failedStealth(): number {
		return this.dataView.getInt32(296, true)
	}

	public get quickRestart(): number {
		return this.dataView.getInt32(304, true)
	}

	public get starterBossId1(): number {
		return this.dataView.getInt32(312, true)
	}

	public get starterBossId2(): number {
		return this.dataView.getInt32(320, true)
	}

	public get sessionId(): number {
		return this.dataView.getInt32(328, true)
	}

	public get bossType(): number {
		return this.dataView.getInt32(336, true)
	}

	public get attackType(): number {
		return this.dataView.getInt32(344, true)
	}

	public get timeTakenForObjective(): number {
		return this.dataView.getInt32(352, true)
	}

	public get entitiesStolen(): number {
		return this.dataView.getInt32(360, true)
	}
}