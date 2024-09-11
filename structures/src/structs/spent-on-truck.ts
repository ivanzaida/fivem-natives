export class SpentOnTruck {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(96))) {
		if (dataView.byteLength !== 96) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get vehicle(): number {
		return this.dataView.getInt32(0, true)
	}

	public get vehicle_amount(): number {
		return this.dataView.getInt32(8, true)
	}

	public get trailer(): number {
		return this.dataView.getInt32(16, true)
	}

	public get trailer_amount(): number {
		return this.dataView.getInt32(24, true)
	}

	public get slot1(): number {
		return this.dataView.getInt32(32, true)
	}

	public get slot1_amount(): number {
		return this.dataView.getInt32(40, true)
	}

	public get slot2(): number {
		return this.dataView.getInt32(48, true)
	}

	public get slot2_amount(): number {
		return this.dataView.getInt32(56, true)
	}

	public get slot3(): number {
		return this.dataView.getInt32(64, true)
	}

	public get slot3_amount(): number {
		return this.dataView.getInt32(72, true)
	}

	public get colorscheme(): number {
		return this.dataView.getInt32(80, true)
	}

	public get colorscheme_amount(): number {
		return this.dataView.getInt32(88, true)
	}
}