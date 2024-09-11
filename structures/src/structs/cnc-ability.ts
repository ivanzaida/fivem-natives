export class CncAbility {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(72))) {
		if (dataView.byteLength !== 72) {
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

	public get team(): number {
		return this.dataView.getInt32(16, true)
	}

	public get role(): number {
		return this.dataView.getInt32(24, true)
	}

	public get roundNumber(): number {
		return this.dataView.getInt32(32, true)
	}

	public get stage(): number {
		return this.dataView.getInt32(40, true)
	}

	public get ability(): number {
		return this.dataView.getInt32(48, true)
	}

	public get vehicle(): number {
		return this.dataView.getInt32(56, true)
	}

	public get wantedLvl(): number {
		return this.dataView.getInt32(64, true)
	}
}