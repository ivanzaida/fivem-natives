export class AptUtilBreakdown {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(64))) {
		if (dataView.byteLength !== 64) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get lowAptFees(): number {
		return this.dataView.getInt32(0, true)
	}

	public get medAptFees(): number {
		return this.dataView.getInt32(8, true)
	}

	public get highAptFees(): number {
		return this.dataView.getInt32(16, true)
	}

	public get yachtFees(): number {
		return this.dataView.getInt32(24, true)
	}

	public get facilityFees(): number {
		return this.dataView.getInt32(32, true)
	}

	public get penthouseFees(): number {
		return this.dataView.getInt32(40, true)
	}

	public get kosatkaFees(): number {
		return this.dataView.getInt32(48, true)
	}

	public get cleanerFees(): number {
		return this.dataView.getInt32(56, true)
	}
}