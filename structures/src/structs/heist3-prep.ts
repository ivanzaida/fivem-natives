export class Heist3Prep {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(288))) {
		if (dataView.byteLength !== 288) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get playthroughId(): number {
		return this.dataView.getInt32(0, true)
	}

	public get missionName(): number {
		return this.dataView.getInt32(8, true)
	}

	public get playthroughHashMac(): number {
		return this.dataView.getInt32(16, true)
	}

	public get playCount(): number {
		return this.dataView.getInt32(24, true)
	}

	public get approach(): number {
		return this.dataView.getInt32(32, true)
	}

	public get type(): number {
		return this.dataView.getInt32(40, true)
	}

	public get bossId1(): number {
		return this.dataView.getInt32(48, true)
	}

	public get bossId2(): number {
		return this.dataView.getInt32(56, true)
	}

	public get bosstype(): number {
		return this.dataView.getInt32(64, true)
	}

	public get launcherRank(): number {
		return this.dataView.getInt32(72, true)
	}

	public get playerRole(): number {
		return this.dataView.getInt32(80, true)
	}

	public get playerParticipated(): boolean {
		return this.dataView.getInt8(88) === 1;
	}

	public get difficult(): boolean {
		return this.dataView.getInt8(96) === 1;
	}

	public get timeTakenToComplete(): number {
		return this.dataView.getInt32(104, true)
	}

	public get endingReason(): number {
		return this.dataView.getInt32(112, true)
	}

	public get isRivalParty(): boolean {
		return this.dataView.getInt8(120) === 1;
	}

	public get cashEarned(): number {
		return this.dataView.getInt32(128, true)
	}

	public get rpEarned(): number {
		return this.dataView.getInt32(136, true)
	}

	public get location(): number {
		return this.dataView.getInt32(144, true)
	}

	public get invitesSent(): number {
		return this.dataView.getInt32(152, true)
	}

	public get invitesAccepted(): number {
		return this.dataView.getInt32(160, true)
	}

	public get deaths(): number {
		return this.dataView.getInt32(168, true)
	}

	public get targetsKilled(): number {
		return this.dataView.getInt32(176, true)
	}

	public get innocentsKilled(): number {
		return this.dataView.getInt32(184, true)
	}

	public get prepCrewMember(): number {
		return this.dataView.getInt32(192, true)
	}

	public get unlockYohan(): number {
		return this.dataView.getInt32(200, true)
	}

	public get unlockCharlie(): number {
		return this.dataView.getInt32(208, true)
	}

	public get unlockChester1(): number {
		return this.dataView.getInt32(216, true)
	}

	public get unlockChester2(): number {
		return this.dataView.getInt32(224, true)
	}

	public get unlockZach(): number {
		return this.dataView.getInt32(232, true)
	}

	public get unlockPatrick(): number {
		return this.dataView.getInt32(240, true)
	}

	public get unlockAvi(): number {
		return this.dataView.getInt32(248, true)
	}

	public get unlockPaige(): number {
		return this.dataView.getInt32(256, true)
	}

	public get accessPoints(): number {
		return this.dataView.getInt32(264, true)
	}

	public get shipmentsDestroyed(): number {
		return this.dataView.getInt32(272, true)
	}

	public get vaultTarget(): number {
		return this.dataView.getInt32(280, true)
	}
}