export class CncSwitch {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(64))) {
		if (dataView.byteLength !== 64) {
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

	public get prevRole(): number {
		return this.dataView.getInt32(24, true)
	}

	public get newRole(): number {
		return this.dataView.getInt32(32, true)
	}

	public get newEmote(): number {
		return this.dataView.getInt32(40, true)
	}

	public get slot(): number {
		return this.dataView.getInt32(48, true)
	}

	public get cashLost(): number {
		return this.dataView.getInt32(56, true)
	}
}