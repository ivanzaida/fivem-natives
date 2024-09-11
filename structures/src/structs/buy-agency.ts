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

	public get location_amount(): number {
		return this.dataView.getInt32(8, true)
	}

	public get style(): number {
		return this.dataView.getInt32(16, true)
	}

	public get style_amount(): number {
		return this.dataView.getInt32(24, true)
	}

	public get wallpaper(): number {
		return this.dataView.getInt32(32, true)
	}

	public get wallpaper_amount(): number {
		return this.dataView.getInt32(40, true)
	}

	public get tint(): number {
		return this.dataView.getInt32(48, true)
	}

	public get tint_amount(): number {
		return this.dataView.getInt32(56, true)
	}

	public get personal_quarter(): number {
		return this.dataView.getInt32(64, true)
	}

	public get personal_quarter_amount(): number {
		return this.dataView.getInt32(72, true)
	}

	public get weapon_workshop(): number {
		return this.dataView.getInt32(80, true)
	}

	public get weapon_workshop_amount(): number {
		return this.dataView.getInt32(88, true)
	}

	public get vehicle_workshop(): number {
		return this.dataView.getInt32(96, true)
	}

	public get vehicle_workshop_amount(): number {
		return this.dataView.getInt32(104, true)
	}
}