export class ContrabandMission {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(144))) {
		if (dataView.byteLength !== 144) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get bossId1(): number {
		return this.dataView.getInt32(0, true)
	}

	public get bossId2(): number {
		return this.dataView.getInt32(8, true)
	}

	public get matchId1(): number {
		return this.dataView.getInt32(16, true)
	}

	public get matchId2(): number {
		return this.dataView.getInt32(24, true)
	}

	public get playerParticipated(): number {
		return this.dataView.getInt32(32, true)
	}

	public get timeStart(): number {
		return this.dataView.getInt32(40, true)
	}

	public get timeEnd(): number {
		return this.dataView.getInt32(48, true)
	}

	public get won(): number {
		return this.dataView.getInt32(56, true)
	}

	public get endingReason(): number {
		return this.dataView.getInt32(64, true)
	}

	public get cashEarned(): number {
		return this.dataView.getInt32(72, true)
	}

	public get rpEarned(): number {
		return this.dataView.getInt32(80, true)
	}

	public get location(): number {
		return this.dataView.getInt32(88, true)
	}

	public get type(): number {
		return this.dataView.getInt32(96, true)
	}

	public get subtype(): number {
		return this.dataView.getInt32(104, true)
	}

	public get warehouseOwned(): number {
		return this.dataView.getInt32(112, true)
	}

	public get warehouseOwnedCount(): number {
		return this.dataView.getInt32(120, true)
	}

	public get failureReason(): number {
		return this.dataView.getInt32(128, true)
	}

	public get missionId(): number {
		return this.dataView.getInt32(136, true)
	}
}