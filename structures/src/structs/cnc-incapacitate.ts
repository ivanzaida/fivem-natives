export class CncIncapacitate {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(104))) {
		if (dataView.byteLength !== 104) {
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

	public get incType(): number {
		return this.dataView.getInt32(16, true)
	}

	public get crookRole(): number {
		return this.dataView.getInt32(24, true)
	}

	public get crookProgRank(): number {
		return this.dataView.getInt32(32, true)
	}

	public get crookVehicle(): number {
		return this.dataView.getInt32(40, true)
	}

	public get copId(): number {
		return this.dataView.getInt32(48, true)
	}

	public get copRole(): number {
		return this.dataView.getInt32(56, true)
	}

	public get copProgRank(): number {
		return this.dataView.getInt32(64, true)
	}

	public get copWeapon(): number {
		return this.dataView.getInt32(72, true)
	}

	public get copVehicle(): number {
		return this.dataView.getInt32(80, true)
	}

	public get vOffender(): boolean {
		return this.dataView.getInt8(88) === 1;
	}

	public get wantedLvl(): number {
		return this.dataView.getInt32(96, true)
	}
}