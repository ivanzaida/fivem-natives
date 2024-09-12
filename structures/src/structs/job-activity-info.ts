export class JobActivityInfo {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(376))) {
		if (dataView.byteLength !== 376) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get cash(): number {
		return this.dataView.getInt32(0, true)
	}

	public get betCash(): number {
		return this.dataView.getInt32(8, true)
	}

	public get cashStart(): number {
		return this.dataView.getInt32(16, true)
	}

	public get cashEnd(): number {
		return this.dataView.getInt32(24, true)
	}

	public get missionLaunch(): number {
		return this.dataView.getInt32(32, true)
	}

	public get originalHashMac(): number {
		return this.dataView.getInt32(40, true)
	}

	public get originalPosixTime(): number {
		return this.dataView.getInt32(48, true)
	}

	public get isTeamDeathmatch(): boolean {
		return this.dataView.getInt8(56) === 1;
	}

	public get leftInProgress(): boolean {
		return this.dataView.getInt8(64) === 1;
	}

	public get dnf(): boolean {
		return this.dataView.getInt8(72) === 1;
	}

	public get aggregateScore(): boolean {
		return this.dataView.getInt8(80) === 1;
	}

	public get xp(): number {
		return this.dataView.getInt32(88, true)
	}

	public get highestKillStreak(): number {
		return this.dataView.getInt32(96, true)
	}

	public get kills(): number {
		return this.dataView.getInt32(104, true)
	}

	public get deaths(): number {
		return this.dataView.getInt32(112, true)
	}

	public get suicides(): number {
		return this.dataView.getInt32(120, true)
	}

	public get rank(): number {
		return this.dataView.getInt32(128, true)
	}

	public get crewId(): number {
		return this.dataView.getInt32(136, true)
	}

	public get vehicleId(): number {
		return this.dataView.getInt32(144, true)
	}

	public get betWon(): number {
		return this.dataView.getInt32(152, true)
	}

	public get survivedWave(): number {
		return this.dataView.getInt32(160, true)
	}

	public get teamId(): number {
		return this.dataView.getInt32(168, true)
	}

	public get matchType(): number {
		return this.dataView.getInt32(176, true)
	}

	public get raceType(): number {
		return this.dataView.getInt32(184, true)
	}

	public get raceSubtype(): number {
		return this.dataView.getInt32(192, true)
	}

	public get matchResult(): number {
		return this.dataView.getInt32(200, true)
	}

	public get jpEarned(): number {
		return this.dataView.getInt32(208, true)
	}

	public get numLaps(): number {
		return this.dataView.getInt32(216, true)
	}

	public get playlistId(): number {
		return this.dataView.getInt32(224, true)
	}

	public get celebrationanim(): number {
		return this.dataView.getInt32(232, true)
	}

	public get quickplayanim(): number {
		return this.dataView.getInt32(240, true)
	}

	public get stuntLaunchCorona(): number {
		return this.dataView.getInt32(248, true)
	}

	public get ishead2head(): boolean {
		return this.dataView.getInt8(256) === 1;
	}

	public get isPlaylistChallenge(): boolean {
		return this.dataView.getInt8(264) === 1;
	}

	public get jobVisibilitySetInCorona(): boolean {
		return this.dataView.getInt8(272) === 1;
	}

	public get weaponsfixed(): boolean {
		return this.dataView.getInt8(280) === 1;
	}

	public get sessionVisible(): boolean {
		return this.dataView.getInt8(288) === 1;
	}

	public get jobDifficulty(): number {
		return this.dataView.getInt32(296, true)
	}

	public get outfitStyle(): number {
		return this.dataView.getInt32(304, true)
	}

	public get outfitChoiceType(): number {
		return this.dataView.getInt32(312, true)
	}

	public get playlistHashMac(): number {
		return this.dataView.getInt32(320, true)
	}

	public get playlistPosixTime(): number {
		return this.dataView.getInt32(328, true)
	}

	public get totalPoints(): number {
		return this.dataView.getInt32(336, true)
	}

	public get largeTargetsHit(): number {
		return this.dataView.getInt32(344, true)
	}

	public get mediumTargetsHit(): number {
		return this.dataView.getInt32(352, true)
	}

	public get smallTargetsHit(): number {
		return this.dataView.getInt32(360, true)
	}

	public get tinyTargetsHit(): number {
		return this.dataView.getInt32(368, true)
	}
}