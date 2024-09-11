export class RsRefShopData {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(24))) {
		if (dataView.byteLength !== 24) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get name(): number {
		return this.dataView.getInt32(0, true)
	}

	public get price(): number {
		return this.dataView.getInt32(8, true)
	}

	public get description(): number {
		return this.dataView.getInt32(16, true)
	}
}