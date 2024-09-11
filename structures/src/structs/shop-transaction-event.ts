export class ShopTransactionEvent {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(56))) {
		if (dataView.byteLength !== 56) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get id(): number {
		return this.dataView.getInt32(0, true)
	}

	public get type(): number {
		return this.dataView.getInt32(8, true)
	}

	public get resultCode(): number {
		return this.dataView.getInt32(16, true)
	}

	public get action(): number {
		return this.dataView.getInt32(24, true)
	}

	public get serviceid(): number {
		return this.dataView.getInt32(32, true)
	}

	public get bank(): number {
		return this.dataView.getInt32(40, true)
	}

	public get wallet(): number {
		return this.dataView.getInt32(48, true)
	}
}