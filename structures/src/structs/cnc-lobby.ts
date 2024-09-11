export class CncLobby {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(184))) {
		if (dataView.byteLength !== 184) {
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

	public get gameRank(): number {
		return this.dataView.getInt32(24, true)
	}

	public get progRank(): number {
		return this.dataView.getInt32(32, true)
	}

	public get copRole(): number {
		return this.dataView.getInt32(40, true)
	}

	public get copWeapons(): number {
		return this.dataView.getInt32(48, true)
	}

	public get copClothing(): number {
		return this.dataView.getInt32(56, true)
	}

	public get copTattoos(): number {
		return this.dataView.getInt32(64, true)
	}

	public get copEmote(): number {
		return this.dataView.getInt32(72, true)
	}

	public get copVehicle(): number {
		return this.dataView.getInt32(80, true)
	}

	public get copAbilities(): number {
		return this.dataView.getInt32(88, true)
	}

	public get crookRole(): number {
		return this.dataView.getInt32(96, true)
	}

	public get crookWeapons(): number {
		return this.dataView.getInt32(104, true)
	}

	public get crookClothing(): number {
		return this.dataView.getInt32(112, true)
	}

	public get crookTattoos(): number {
		return this.dataView.getInt32(120, true)
	}

	public get crookEmote(): number {
		return this.dataView.getInt32(128, true)
	}

	public get crookVehicle(): number {
		return this.dataView.getInt32(136, true)
	}

	public get crookAbilities(): number {
		return this.dataView.getInt32(144, true)
	}

	public get endReason(): number {
		return this.dataView.getInt32(152, true)
	}

	public get joinFrom(): number {
		return this.dataView.getInt32(160, true)
	}

	public get copSlot(): number {
		return this.dataView.getInt32(168, true)
	}

	public get crookSlot(): number {
		return this.dataView.getInt32(176, true)
	}
}