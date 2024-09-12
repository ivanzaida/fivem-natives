export class RobberyPrep {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(272))) {
		if (dataView.byteLength !== 272) {
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

	public get sessionId(): number {
		return this.dataView.getInt32(16, true)
	}

	public get strandId(): number {
		return this.dataView.getInt32(24, true)
	}

	public get type(): number {
		return this.dataView.getInt32(32, true)
	}

	public get bossId1(): number {
		return this.dataView.getInt32(40, true)
	}

	public get bossId2(): number {
		return this.dataView.getInt32(48, true)
	}

	public get bosstype(): number {
		return this.dataView.getInt32(56, true)
	}

	public get launcherRank(): number {
		return this.dataView.getInt32(64, true)
	}

	public get playerRole(): number {
		return this.dataView.getInt32(72, true)
	}

	public get playerParticipated(): boolean {
		return this.dataView.getInt8(80) === 1;
	}

	public get timeTakenToComplete(): number {
		return this.dataView.getInt32(88, true)
	}

	public get timeLimit(): number {
		return this.dataView.getInt32(96, true)
	}

	public get endingReason(): number {
		return this.dataView.getInt32(104, true)
	}

	public get isRivalParty(): boolean {
		return this.dataView.getInt8(112) === 1;
	}

	public get cashEarned(): number {
		return this.dataView.getInt32(120, true)
	}

	public get rpEarned(): number {
		return this.dataView.getInt32(128, true)
	}

	public get location(): number {
		return this.dataView.getInt32(136, true)
	}

	public get invitesSent(): number {
		return this.dataView.getInt32(144, true)
	}

	public get invitesAccepted(): number {
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

	public get deliveryLocation(): number {
		return this.dataView.getInt32(208, true)
	}

	public get hashmac(): number {
		return this.dataView.getInt32(216, true)
	}

	public get vehicleStolen(): number {
		return this.dataView.getInt32(224, true)
	}

	public get vehicleCount(): number {
		return this.dataView.getInt32(232, true)
	}

	public get outfits(): number {
		return this.dataView.getInt32(240, true)
	}

	public get entrance(): number {
		return this.dataView.getInt32(248, true)
	}

	public get missionCategory(): number {
		return this.dataView.getInt32(256, true)
	}

	public get won(): boolean {
		return this.dataView.getInt8(264) === 1;
	}
}