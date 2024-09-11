export class JobBInfo {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(368))) {
		if (dataView.byteLength !== 368) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get ishost(): boolean {
		return this.dataView.getInt8(0) === 1;
	}

	public get role(): number {
		return this.dataView.getInt32(8, true)
	}

	public get cashcutpercentage(): number {
		return this.dataView.getInt32(16, true)
	}

	public get kills(): number {
		return this.dataView.getInt32(24, true)
	}

	public get deaths(): number {
		return this.dataView.getInt32(32, true)
	}

	public get clothes(): number {
		return this.dataView.getInt32(40, true)
	}

	public get cash(): number {
		return this.dataView.getInt32(48, true)
	}

	public get cashStart(): number {
		return this.dataView.getInt32(56, true)
	}

	public get cashEnd(): number {
		return this.dataView.getInt32(64, true)
	}

	public get missionLaunch(): number {
		return this.dataView.getInt32(72, true)
	}

	public get xp(): number {
		return this.dataView.getInt32(80, true)
	}

	public get suicides(): number {
		return this.dataView.getInt32(88, true)
	}

	public get rank(): number {
		return this.dataView.getInt32(96, true)
	}

	public get crewId(): number {
		return this.dataView.getInt32(104, true)
	}

	public get teamId(): number {
		return this.dataView.getInt32(112, true)
	}

	public get matchResult(): number {
		return this.dataView.getInt32(120, true)
	}

	public get jpEarned(): number {
		return this.dataView.getInt32(128, true)
	}

	public get celebrationanim(): number {
		return this.dataView.getInt32(136, true)
	}

	public get quickplayanim(): number {
		return this.dataView.getInt32(144, true)
	}

	public get sessionVisible(): boolean {
		return this.dataView.getInt8(152) === 1;
	}

	public get leftInProgress(): boolean {
		return this.dataView.getInt8(160) === 1;
	}

	public get leaderscashcutpercentage(): number {
		return this.dataView.getInt32(168, true)
	}

	public get lesterCalled(): number {
		return this.dataView.getInt32(176, true)
	}

	public get heistRootConstentId(): number {
		return this.dataView.getInt32(184, true)
	}

	public get timePlanningBoard(): number {
		return this.dataView.getInt32(192, true)
	}

	public get outfitChoiceBy(): number {
		return this.dataView.getInt32(200, true)
	}

	public get outfitChoiceType(): number {
		return this.dataView.getInt32(208, true)
	}

	public get outfitStyle(): number {
		return this.dataView.getInt32(216, true)
	}

	public get difficulty(): number {
		return this.dataView.getInt32(224, true)
	}

	public get m_1stperson(): number {
		return this.dataView.getInt32(232, true)
	}

	public get medal(): number {
		return this.dataView.getInt32(240, true)
	}

	public get teamLivesUsed(): number {
		return this.dataView.getInt32(248, true)
	}

	public get failureReason(): number {
		return this.dataView.getInt32(256, true)
	}

	public get failureRole(): number {
		return this.dataView.getInt32(264, true)
	}

	public get usedQuickRestart(): number {
		return this.dataView.getInt32(272, true)
	}

	public get usedTripSkip(): number {
		return this.dataView.getInt32(280, true)
	}

	public get spookedCops(): number {
		return this.dataView.getInt32(288, true)
	}

	public get cashLost(): number {
		return this.dataView.getInt32(296, true)
	}

	public get cashPickedUp(): number {
		return this.dataView.getInt32(304, true)
	}

	public get minigameTimeTaken0(): number {
		return this.dataView.getInt32(312, true)
	}

	public get minigameNumberOfTimes0(): number {
		return this.dataView.getInt32(320, true)
	}

	public get minigameTimeTaken1(): number {
		return this.dataView.getInt32(328, true)
	}

	public get minigameNumberOfTimes1(): number {
		return this.dataView.getInt32(336, true)
	}

	public get heistSessionHashMac(): number {
		return this.dataView.getInt32(344, true)
	}

	public get heistSessionIdPosixTime(): number {
		return this.dataView.getInt32(352, true)
	}

	public get maskChoice(): number {
		return this.dataView.getInt32(360, true)
	}
}