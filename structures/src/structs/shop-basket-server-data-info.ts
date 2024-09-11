export class ShopBasketServerDataInfo {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(40))) {
		if (dataView.byteLength !== 40) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get cashUpdateReceived(): boolean {
		return this.dataView.getInt8(0) === 1;
	}

	public get bankCashDifference(): number {
		return this.dataView.getInt32(8, true)
	}

	public get walletCashDifference(): number {
		return this.dataView.getInt32(16, true)
	}

	public get inventoryReceived(): boolean {
		return this.dataView.getInt8(24) === 1;
	}

	public get numItems(): number {
		return this.dataView.getInt32(32, true)
	}
}