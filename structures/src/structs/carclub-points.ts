export class CarclubPoints {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(72))) {
		if (dataView.byteLength !== 72) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get boss_id1(): number {
		return this.dataView.getInt32(0, true)
	}

	public get boss_id2(): number {
		return this.dataView.getInt32(8, true)
	}

	public get match_id(): number {
		return this.dataView.getInt32(16, true)
	}

	public get method(): number {
		return this.dataView.getInt32(24, true)
	}

	public get amount(): number {
		return this.dataView.getInt32(32, true)
	}

	public get itemBought(): number {
		return this.dataView.getInt32(40, true)
	}

	public get streak(): number {
		return this.dataView.getInt32(48, true)
	}

	public get memberLevel(): number {
		return this.dataView.getInt32(56, true)
	}

	public get levelUp(): boolean {
		return this.dataView.getInt8(64) === 1;
	}
}