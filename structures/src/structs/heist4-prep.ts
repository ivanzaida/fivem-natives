export class Heist4Prep {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(280))) {
		if (dataView.byteLength !== 280) {
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

	public get hashmac(): number {
		return this.dataView.getInt32(24, true)
	}

	public get playCount(): number {
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

	public get mandatory(): boolean {
		return this.dataView.getInt8(192) === 1;
	}

	public get primTar(): number {
		return this.dataView.getInt32(200, true)
	}

	public get properties(): number {
		return this.dataView.getInt32(208, true)
	}

	public get entrances(): number {
		return this.dataView.getInt32(216, true)
	}

	public get approaches(): number {
		return this.dataView.getInt32(224, true)
	}

	public get grappleLoc(): number {
		return this.dataView.getInt32(232, true)
	}

	public get uniLoc(): number {
		return this.dataView.getInt32(240, true)
	}

	public get cutterLoc(): number {
		return this.dataView.getInt32(248, true)
	}

	public get secLootLoc(): number {
		return this.dataView.getInt32(256, true)
	}

	public get miscActions(): number {
		return this.dataView.getInt32(264, true)
	}

	public get properties2(): number {
		return this.dataView.getInt32(272, true)
	}
}