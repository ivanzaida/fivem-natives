export class SpendHangar {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(112))) {
		if (dataView.byteLength !== 112) {
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

	public get flooring(): number {
		return this.dataView.getInt32(16, true)
	}

	public get flooringAmount(): number {
		return this.dataView.getInt32(24, true)
	}

	public get furnitures(): number {
		return this.dataView.getInt32(32, true)
	}

	public get furnituresAmount(): number {
		return this.dataView.getInt32(40, true)
	}

	public get workshop(): number {
		return this.dataView.getInt32(48, true)
	}

	public get workshopAmount(): number {
		return this.dataView.getInt32(56, true)
	}

	public get style(): number {
		return this.dataView.getInt32(64, true)
	}

	public get styleAmount(): number {
		return this.dataView.getInt32(72, true)
	}

	public get lighting(): number {
		return this.dataView.getInt32(80, true)
	}

	public get lightingAmount(): number {
		return this.dataView.getInt32(88, true)
	}

	public get livingQuarter(): number {
		return this.dataView.getInt32(96, true)
	}

	public get livingQuarterAmount(): number {
		return this.dataView.getInt32(104, true)
	}
}