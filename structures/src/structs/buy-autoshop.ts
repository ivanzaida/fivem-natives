export class BuyAutoshop {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(128))) {
		if (dataView.byteLength !== 128) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get location(): number {
		return this.dataView.getInt32(0, true)
	}

	public get location_amount(): number {
		return this.dataView.getInt32(8, true)
	}

	public get style(): number {
		return this.dataView.getInt32(16, true)
	}

	public get style_amount(): number {
		return this.dataView.getInt32(24, true)
	}

	public get tint(): number {
		return this.dataView.getInt32(32, true)
	}

	public get tint_amount(): number {
		return this.dataView.getInt32(40, true)
	}

	public get emblem(): number {
		return this.dataView.getInt32(48, true)
	}

	public get emblem_amount(): number {
		return this.dataView.getInt32(56, true)
	}

	public get crew_name(): number {
		return this.dataView.getInt32(64, true)
	}

	public get crew_name_amount(): number {
		return this.dataView.getInt32(72, true)
	}

	public get staff(): number {
		return this.dataView.getInt32(80, true)
	}

	public get staff_amount(): number {
		return this.dataView.getInt32(88, true)
	}

	public get lift(): number {
		return this.dataView.getInt32(96, true)
	}

	public get lift_amount(): number {
		return this.dataView.getInt32(104, true)
	}

	public get personal_quarter(): number {
		return this.dataView.getInt32(112, true)
	}

	public get personal_quarter_amount(): number {
		return this.dataView.getInt32(120, true)
	}
}