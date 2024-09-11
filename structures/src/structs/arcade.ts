export class Arcade {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(160))) {
		if (dataView.byteLength !== 160) {
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

	public get garage(): number {
		return this.dataView.getInt32(16, true)
	}

	public get garage_amount(): number {
		return this.dataView.getInt32(24, true)
	}

	public get sleeping_quarter(): number {
		return this.dataView.getInt32(32, true)
	}

	public get sleeping_quarter_amount(): number {
		return this.dataView.getInt32(40, true)
	}

	public get drone_station(): number {
		return this.dataView.getInt32(48, true)
	}

	public get drone_station_amount(): number {
		return this.dataView.getInt32(56, true)
	}

	public get business_management(): number {
		return this.dataView.getInt32(64, true)
	}

	public get business_management_amount(): number {
		return this.dataView.getInt32(72, true)
	}

	public get style(): number {
		return this.dataView.getInt32(80, true)
	}

	public get style_amount(): number {
		return this.dataView.getInt32(88, true)
	}

	public get mural(): number {
		return this.dataView.getInt32(96, true)
	}

	public get mural_amount(): number {
		return this.dataView.getInt32(104, true)
	}

	public get floor(): number {
		return this.dataView.getInt32(112, true)
	}

	public get floor_amount(): number {
		return this.dataView.getInt32(120, true)
	}

	public get neon_art(): number {
		return this.dataView.getInt32(128, true)
	}

	public get neon_art_amount(): number {
		return this.dataView.getInt32(136, true)
	}

	public get highscore_screen(): number {
		return this.dataView.getInt32(144, true)
	}

	public get highscore_screen_amount(): number {
		return this.dataView.getInt32(152, true)
	}
}