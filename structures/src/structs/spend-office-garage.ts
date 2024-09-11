export class SpendOfficeGarage {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(80))) {
		if (dataView.byteLength !== 80) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get location(): number {
		return this.dataView.getInt32(0, true)
	}

	public get locationAmount(): number {
		return this.dataView.getInt32(8, true)
	}

	public get numbering(): number {
		return this.dataView.getInt32(16, true)
	}

	public get numberingAmount(): number {
		return this.dataView.getInt32(24, true)
	}

	public get numberingStyle(): number {
		return this.dataView.getInt32(32, true)
	}

	public get numberingStyleAmount(): number {
		return this.dataView.getInt32(40, true)
	}

	public get lighting(): number {
		return this.dataView.getInt32(48, true)
	}

	public get lightingAmount(): number {
		return this.dataView.getInt32(56, true)
	}

	public get wall(): number {
		return this.dataView.getInt32(64, true)
	}

	public get wallAmount(): number {
		return this.dataView.getInt32(72, true)
	}
}