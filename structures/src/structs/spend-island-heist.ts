export class SpendIslandHeist {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(80))) {
		if (dataView.byteLength !== 80) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get airstrike(): number {
		return this.dataView.getInt32(0, true)
	}

	public get heavy_weapon(): number {
		return this.dataView.getInt32(8, true)
	}

	public get sniper(): number {
		return this.dataView.getInt32(16, true)
	}

	public get air_support(): number {
		return this.dataView.getInt32(24, true)
	}

	public get idrone(): number {
		return this.dataView.getInt32(32, true)
	}

	public get weapon_stash(): number {
		return this.dataView.getInt32(40, true)
	}

	public get suppressor(): number {
		return this.dataView.getInt32(48, true)
	}

	public get replay(): number {
		return this.dataView.getInt32(56, true)
	}

	public get prep(): number {
		return this.dataView.getInt32(64, true)
	}

	public get prepItem(): number {
		return this.dataView.getInt32(72, true)
	}
}