export class CncRound {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(320))) {
		if (dataView.byteLength !== 320) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get matchId1(): number {
		return this.dataView.getInt32(0, true)
	}

	public get matchId2(): number {
		return this.dataView.getInt32(8, true)
	}

	public get roundNumber(): number {
		return this.dataView.getInt32(16, true)
	}

	public get team(): number {
		return this.dataView.getInt32(24, true)
	}

	public get role(): number {
		return this.dataView.getInt32(32, true)
	}

	public get gameRank(): number {
		return this.dataView.getInt32(40, true)
	}

	public get progRank(): number {
		return this.dataView.getInt32(48, true)
	}

	public get roleChange(): boolean {
		return this.dataView.getInt8(56) === 1;
	}

	public get spawnLoc(): number {
		return this.dataView.getInt32(64, true)
	}

	public get escapeLoc(): number {
		return this.dataView.getInt32(72, true)
	}

	public get roundStartTime(): number {
		return this.dataView.getInt32(80, true)
	}

	public get endReasonStgOne(): number {
		return this.dataView.getInt32(88, true)
	}

	public get endReasonStgTwo(): number {
		return this.dataView.getInt32(96, true)
	}

	public get escapeResult(): number {
		return this.dataView.getInt32(104, true)
	}

	public get durationStgOne(): number {
		return this.dataView.getInt32(112, true)
	}

	public get durationStgTwo(): number {
		return this.dataView.getInt32(120, true)
	}

	public get launchMethod(): number {
		return this.dataView.getInt32(128, true)
	}

	public get jip(): boolean {
		return this.dataView.getInt8(136) === 1;
	}

	public get win(): boolean {
		return this.dataView.getInt8(144) === 1;
	}

	public get xpEarned(): number {
		return this.dataView.getInt32(152, true)
	}

	public get streetCrimeCount(): number {
		return this.dataView.getInt32(160, true)
	}

	public get jobCount(): number {
		return this.dataView.getInt32(168, true)
	}

	public get jobsRemaining(): number {
		return this.dataView.getInt32(176, true)
	}

	public get copPoints(): number {
		return this.dataView.getInt32(184, true)
	}

	public get arrests(): number {
		return this.dataView.getInt32(192, true)
	}

	public get moneyEarned(): number {
		return this.dataView.getInt32(200, true)
	}

	public get moneyStashed(): number {
		return this.dataView.getInt32(208, true)
	}

	public get moneyBanked(): number {
		return this.dataView.getInt32(216, true)
	}

	public get crooksKilled(): number {
		return this.dataView.getInt32(224, true)
	}

	public get copsKilled(): number {
		return this.dataView.getInt32(232, true)
	}

	public get deaths(): number {
		return this.dataView.getInt32(240, true)
	}

	public get vOffender(): boolean {
		return this.dataView.getInt8(248) === 1;
	}

	public get incapacitations(): number {
		return this.dataView.getInt32(256, true)
	}

	public get moneyMaxHeld(): number {
		return this.dataView.getInt32(264, true)
	}

	public get endurance(): number {
		return this.dataView.getInt32(272, true)
	}

	public get spawnGroup(): number {
		return this.dataView.getInt32(280, true)
	}

	public get escapeTime(): number {
		return this.dataView.getInt32(288, true)
	}

	public get spectateTime(): number {
		return this.dataView.getInt32(296, true)
	}

	public get durationVehicleStgOne(): number {
		return this.dataView.getInt32(304, true)
	}

	public get durationVehicleStgTwo(): number {
		return this.dataView.getInt32(312, true)
	}
}