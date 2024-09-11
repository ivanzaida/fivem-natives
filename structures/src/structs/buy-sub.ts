export class BuySub {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(128))) {
		if (dataView.byteLength !== 128) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get submarine_amount(): number {
		return this.dataView.getInt32(0, true)
	}

	public get color(): number {
		return this.dataView.getInt32(8, true)
	}

	public get color_amount(): number {
		return this.dataView.getInt32(16, true)
	}

	public get flag(): number {
		return this.dataView.getInt32(24, true)
	}

	public get flag_amount(): number {
		return this.dataView.getInt32(32, true)
	}

	public get anti_aircraft_amount(): number {
		return this.dataView.getInt32(40, true)
	}

	public get missile_station(): number {
		return this.dataView.getInt32(48, true)
	}

	public get missile_station_amount(): number {
		return this.dataView.getInt32(56, true)
	}

	public get sonar(): number {
		return this.dataView.getInt32(64, true)
	}

	public get sonar_amount(): number {
		return this.dataView.getInt32(72, true)
	}

	public get weapon_workshop(): number {
		return this.dataView.getInt32(80, true)
	}

	public get weapon_workshop_amount(): number {
		return this.dataView.getInt32(88, true)
	}

	public get iavisa(): number {
		return this.dataView.getInt32(96, true)
	}

	public get avisa_pool_amount(): number {
		return this.dataView.getInt32(104, true)
	}

	public get iseasparrow(): number {
		return this.dataView.getInt32(112, true)
	}

	public get seasparrow_pool_amount(): number {
		return this.dataView.getInt32(120, true)
	}
}