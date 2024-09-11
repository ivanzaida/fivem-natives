export class SpendClubHouse {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(160))) {
		if (dataView.byteLength !== 160) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get property_id(): number {
		return this.dataView.getInt32(0, true)
	}

	public get property_id_amount(): number {
		return this.dataView.getInt32(8, true)
	}

	public get mural_type(): number {
		return this.dataView.getInt32(16, true)
	}

	public get mural_type_amount(): number {
		return this.dataView.getInt32(24, true)
	}

	public get wall_style(): number {
		return this.dataView.getInt32(32, true)
	}

	public get wall_style_amount(): number {
		return this.dataView.getInt32(40, true)
	}

	public get wall_hanging_style(): number {
		return this.dataView.getInt32(48, true)
	}

	public get wall_hanging_style_amount(): number {
		return this.dataView.getInt32(56, true)
	}

	public get furniture_style(): number {
		return this.dataView.getInt32(64, true)
	}

	public get furniture_style_amount(): number {
		return this.dataView.getInt32(72, true)
	}

	public get emblem(): number {
		return this.dataView.getInt32(80, true)
	}

	public get emblem_amount(): number {
		return this.dataView.getInt32(88, true)
	}

	public get gun_locker(): number {
		return this.dataView.getInt32(96, true)
	}

	public get gun_locker_amount(): number {
		return this.dataView.getInt32(104, true)
	}

	public get mod_shop(): number {
		return this.dataView.getInt32(112, true)
	}

	public get mod_shop_amount(): number {
		return this.dataView.getInt32(120, true)
	}

	public get signage(): number {
		return this.dataView.getInt32(128, true)
	}

	public get signage_amount(): number {
		return this.dataView.getInt32(136, true)
	}

	public get font(): number {
		return this.dataView.getInt32(144, true)
	}

	public get font_amount(): number {
		return this.dataView.getInt32(152, true)
	}
}