export class ArenaWarsEnded {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(360))) {
		if (dataView.byteLength !== 360) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get sessionid(): number {
		return this.dataView.getInt32(0, true)
	}

	public get publiccontentid(): number {
		return this.dataView.getInt32(8, true)
	}

	public get cashearned(): number {
		return this.dataView.getInt32(16, true)
	}

	public get launchmethod(): number {
		return this.dataView.getInt32(24, true)
	}

	public get leftinprogress(): number {
		return this.dataView.getInt32(32, true)
	}

	public get xp(): number {
		return this.dataView.getInt32(40, true)
	}

	public get kills(): number {
		return this.dataView.getInt32(48, true)
	}

	public get deaths(): number {
		return this.dataView.getInt32(56, true)
	}

	public get suicides(): number {
		return this.dataView.getInt32(64, true)
	}

	public get rank(): number {
		return this.dataView.getInt32(72, true)
	}

	public get vehicleid(): number {
		return this.dataView.getInt32(80, true)
	}

	public get matchduration(): number {
		return this.dataView.getInt32(88, true)
	}

	public get playingtime(): number {
		return this.dataView.getInt32(96, true)
	}

	public get result(): number {
		return this.dataView.getInt32(104, true)
	}

	public get premiumEvent(): number {
		return this.dataView.getInt32(112, true)
	}

	public get skillLevel(): number {
		return this.dataView.getInt32(120, true)
	}

	public get endreason(): number {
		return this.dataView.getInt32(128, true)
	}

	public get killer(): number {
		return this.dataView.getInt32(136, true)
	}

	public get killervehicle(): number {
		return this.dataView.getInt32(144, true)
	}

	public get matchtype(): number {
		return this.dataView.getInt32(152, true)
	}

	public get matchname(): number {
		return this.dataView.getInt32(160, true)
	}

	public get checkpointsCollected(): number {
		return this.dataView.getInt32(168, true)
	}

	public get bonusTime(): number {
		return this.dataView.getInt32(176, true)
	}

	public get finishPosition(): number {
		return this.dataView.getInt32(184, true)
	}

	public get teamType(): number {
		return this.dataView.getInt32(192, true)
	}

	public get teamId(): number {
		return this.dataView.getInt32(200, true)
	}

	public get personalVehicle(): number {
		return this.dataView.getInt32(208, true)
	}

	public get flagsStolen(): number {
		return this.dataView.getInt32(216, true)
	}

	public get flagsDelivered(): number {
		return this.dataView.getInt32(224, true)
	}

	public get totalPoints(): number {
		return this.dataView.getInt32(232, true)
	}

	public get goalsScored(): number {
		return this.dataView.getInt32(240, true)
	}

	public get suddenDeath(): number {
		return this.dataView.getInt32(248, true)
	}

	public get winConditions(): number {
		return this.dataView.getInt32(256, true)
	}

	public get damageDealt(): number {
		return this.dataView.getInt32(264, true)
	}

	public get damageReceived(): number {
		return this.dataView.getInt32(272, true)
	}

	public get gladiatorKills(): number {
		return this.dataView.getInt32(280, true)
	}

	public get bombTime(): number {
		return this.dataView.getInt32(288, true)
	}

	public get spectatorTime(): number {
		return this.dataView.getInt32(296, true)
	}

	public get totalTagIns(): number {
		return this.dataView.getInt32(304, true)
	}

	public get timeEliminated(): number {
		return this.dataView.getInt32(312, true)
	}

	public get lobbyModLivery(): number {
		return this.dataView.getInt32(320, true)
	}

	public get lobbyModArmor(): number {
		return this.dataView.getInt32(328, true)
	}

	public get lobbyModWeapon(): number {
		return this.dataView.getInt32(336, true)
	}

	public get lobbyModMine(): number {
		return this.dataView.getInt32(344, true)
	}

	public get controlTurret(): number {
		return this.dataView.getInt32(352, true)
	}
}