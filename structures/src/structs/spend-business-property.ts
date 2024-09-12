export class SpendBusinessProperty {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(24))) {
		if (dataView.byteLength !== 24) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get businessId(): number {
		return this.dataView.getInt32(0, true)
	}

	public get businessType(): number {
		return this.dataView.getInt32(8, true)
	}

	public get businessUpgradeType(): number {
		return this.dataView.getInt32(16, true)
	}
}