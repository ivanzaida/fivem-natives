export class ArcadeLoveMatch {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(88))) {
		if (dataView.byteLength !== 88) {
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

	public get score(): number {
		return this.dataView.getInt32(16, true)
	}

	public get flying(): number {
		return this.dataView.getInt32(24, true)
	}

	public get stamina(): number {
		return this.dataView.getInt32(32, true)
	}

	public get shooting(): number {
		return this.dataView.getInt32(40, true)
	}

	public get driving(): number {
		return this.dataView.getInt32(48, true)
	}

	public get stealth(): number {
		return this.dataView.getInt32(56, true)
	}

	public get maxHealth(): number {
		return this.dataView.getInt32(64, true)
	}

	public get trueLove(): number {
		return this.dataView.getInt32(72, true)
	}

	public get nemesis2(): number {
		return this.dataView.getInt32(80, true)
	}
}