export class Inventory {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(80))) {
		if (dataView.byteLength !== 80) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get action(): number {
		return this.dataView.getInt32(0, true)
	}

	public get reason(): number {
		return this.dataView.getInt32(8, true)
	}

	public get crewId(): number {
		return this.dataView.getInt32(16, true)
	}

	public get location(): number {
		return this.dataView.getInt32(24, true)
	}

	public get shopType(): number {
		return this.dataView.getInt32(32, true)
	}

	public get itemCategory(): number {
		return this.dataView.getInt32(40, true)
	}

	public get itemHash(): number {
		return this.dataView.getInt32(48, true)
	}

	public get itemDelta(): number {
		return this.dataView.getInt32(56, true)
	}

	public get purchaseID(): number {
		return this.dataView.getInt32(64, true)
	}

	public get takeAll(): boolean {
		return this.dataView.getInt8(72) === 1;
	}
}