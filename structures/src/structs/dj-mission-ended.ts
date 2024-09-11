export class DjMissionEnded {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(168))) {
		if (dataView.byteLength !== 168) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get missionTypeId(): number {
		return this.dataView.getInt32(0, true)
	}

	public get missionId(): number {
		return this.dataView.getInt32(8, true)
	}

	public get matchId(): number {
		return this.dataView.getInt32(16, true)
	}

	public get bossId1(): number {
		return this.dataView.getInt32(24, true)
	}

	public get bossId2(): number {
		return this.dataView.getInt32(32, true)
	}

	public get bosstype(): number {
		return this.dataView.getInt32(40, true)
	}

	public get playerRole(): number {
		return this.dataView.getInt32(48, true)
	}

	public get launcherRank(): number {
		return this.dataView.getInt32(56, true)
	}

	public get location(): number {
		return this.dataView.getInt32(64, true)
	}

	public get playerParticipated(): number {
		return this.dataView.getInt32(72, true)
	}

	public get won(): boolean {
		return this.dataView.getInt8(80) === 1;
	}

	public get endingReason(): number {
		return this.dataView.getInt32(88, true)
	}

	public get timeTakenToComplete(): number {
		return this.dataView.getInt32(96, true)
	}

	public get cashEarned(): number {
		return this.dataView.getInt32(104, true)
	}

	public get rpEarned(): number {
		return this.dataView.getInt32(112, true)
	}

	public get chipsEarned(): number {
		return this.dataView.getInt32(120, true)
	}

	public get itemEarned(): number {
		return this.dataView.getInt32(128, true)
	}

	public get targetsKilled(): number {
		return this.dataView.getInt32(136, true)
	}

	public get innocentsKilled(): number {
		return this.dataView.getInt32(144, true)
	}

	public get deaths(): number {
		return this.dataView.getInt32(152, true)
	}

	public get bottlesDelivered(): number {
		return this.dataView.getInt32(160, true)
	}
}