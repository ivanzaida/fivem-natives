export class FreemodeCasinoMissionEnded {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(248))) {
		if (dataView.byteLength !== 248) {
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

	public get missionVariation(): number {
		return this.dataView.getInt32(200, true)
	}

	public get launchMethod(): number {
		return this.dataView.getInt32(208, true)
	}

	public get ownPenthouse(): number {
		return this.dataView.getInt32(216, true)
	}

	public get ownGarage(): number {
		return this.dataView.getInt32(224, true)
	}

	public get ownOffice(): number {
		return this.dataView.getInt32(232, true)
	}

	public get houseChipsEarned(): number {
		return this.dataView.getInt32(240, true)
	}
}