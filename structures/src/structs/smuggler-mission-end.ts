export class SmugglerMissionEnd {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(432))) {
		if (dataView.byteLength !== 432) {
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

	public get resuppliesPassed(): number {
		return this.dataView.getInt32(216, true)
	}

	public get ownHangar(): number {
		return this.dataView.getInt32(224, true)
	}

	public get ownFurniture(): number {
		return this.dataView.getInt32(232, true)
	}

	public get ownFlooring(): number {
		return this.dataView.getInt32(240, true)
	}

	public get ownStyle(): number {
		return this.dataView.getInt32(248, true)
	}

	public get ownLivingArea(): number {
		return this.dataView.getInt32(256, true)
	}

	public get ownLighting(): number {
		return this.dataView.getInt32(264, true)
	}

	public get ownWorkshop(): number {
		return this.dataView.getInt32(272, true)
	}

	public get attackType(): number {
		return this.dataView.getInt32(280, true)
	}

	public get bossType(): number {
		return this.dataView.getInt32(288, true)
	}

	public get membersParticipated(): number {
		return this.dataView.getInt32(296, true)
	}

	public get hangarSlot1(): number {
		return this.dataView.getInt32(304, true)
	}

	public get hangarSlot2(): number {
		return this.dataView.getInt32(312, true)
	}

	public get hangarSlot3(): number {
		return this.dataView.getInt32(320, true)
	}

	public get hangarSlot4(): number {
		return this.dataView.getInt32(328, true)
	}

	public get hangarSlot5(): number {
		return this.dataView.getInt32(336, true)
	}

	public get hangarSlot6(): number {
		return this.dataView.getInt32(344, true)
	}

	public get hangarSlot7(): number {
		return this.dataView.getInt32(352, true)
	}

	public get hangarSlot8(): number {
		return this.dataView.getInt32(360, true)
	}

	public get hangarSlot9(): number {
		return this.dataView.getInt32(368, true)
	}

	public get hangarSlot10(): number {
		return this.dataView.getInt32(376, true)
	}

	public get vehicle1Health(): number {
		return this.dataView.getInt32(384, true)
	}

	public get vehicle2Health(): number {
		return this.dataView.getInt32(392, true)
	}

	public get vehicle3Health(): number {
		return this.dataView.getInt32(400, true)
	}

	public get sourceAnyType(): number {
		return this.dataView.getInt32(408, true)
	}

	public get contrabandType(): number {
		return this.dataView.getInt32(416, true)
	}

	public get fromHackerTruck(): number {
		return this.dataView.getInt32(424, true)
	}
}