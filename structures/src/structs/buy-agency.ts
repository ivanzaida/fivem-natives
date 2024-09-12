export class BuyAgency {
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

	public get style(): number {
		return this.dataView.getInt32(16, true)
	}

	public get styleAmount(): number {
		return this.dataView.getInt32(24, true)
	}

	public get wallpaper(): number {
		return this.dataView.getInt32(32, true)
	}

	public get wallpaperAmount(): number {
		return this.dataView.getInt32(40, true)
	}

	public get tint(): number {
		return this.dataView.getInt32(48, true)
	}

	public get tintAmount(): number {
		return this.dataView.getInt32(56, true)
	}

	public get personalQuarter(): number {
		return this.dataView.getInt32(64, true)
	}

	public get personalQuarterAmount(): number {
		return this.dataView.getInt32(72, true)
	}

	public get weaponWorkshop(): number {
		return this.dataView.getInt32(80, true)
	}

	public get weaponWorkshopAmount(): number {
		return this.dataView.getInt32(88, true)
	}

	public get vehicleWorkshop(): number {
		return this.dataView.getInt32(96, true)
	}

	public get vehicleWorkshopAmount(): number {
		return this.dataView.getInt32(104, true)
	}
}