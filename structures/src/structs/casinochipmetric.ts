export class Casinochipmetric {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(64))) {
		if (dataView.byteLength !== 64) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get action(): number {
		return this.dataView.getInt32(0, true)
	}

	public get transactionID(): number {
		return this.dataView.getInt32(8, true)
	}

	public get cashAmount(): number {
		return this.dataView.getInt32(16, true)
	}

	public get chipsAmount(): number {
		return this.dataView.getInt32(24, true)
	}

	public get reason(): number {
		return this.dataView.getInt32(32, true)
	}

	public get cashBalance(): number {
		return this.dataView.getInt32(40, true)
	}

	public get chipBalance(): number {
		return this.dataView.getInt32(48, true)
	}

	public get item(): number {
		return this.dataView.getInt32(56, true)
	}
}