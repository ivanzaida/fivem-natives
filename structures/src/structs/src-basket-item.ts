export class SrcBasketItem {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(32))) {
		if (dataView.byteLength !== 32) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get catalogKey(): number {
		return this.dataView.getInt32(0, true)
	}

	public get extraInventoryKey(): number {
		return this.dataView.getInt32(8, true)
	}

	public get price(): number {
		return this.dataView.getInt32(16, true)
	}

	public get statvalue(): number {
		return this.dataView.getInt32(24, true)
	}
}