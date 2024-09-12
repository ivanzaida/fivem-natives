export class SpentOnHackerTruck {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(128))) {
		if (dataView.byteLength !== 128) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get truck(): number {
		return this.dataView.getInt32(0, true)
	}

	public get truckAmount(): number {
		return this.dataView.getInt32(8, true)
	}

	public get tint(): number {
		return this.dataView.getInt32(16, true)
	}

	public get tintAmount(): number {
		return this.dataView.getInt32(24, true)
	}

	public get pattern(): number {
		return this.dataView.getInt32(32, true)
	}

	public get patternAmount(): number {
		return this.dataView.getInt32(40, true)
	}

	public get missileLauncher(): number {
		return this.dataView.getInt32(48, true)
	}

	public get missileLauncherAmount(): number {
		return this.dataView.getInt32(56, true)
	}

	public get droneStation(): number {
		return this.dataView.getInt32(64, true)
	}

	public get droneStationAmount(): number {
		return this.dataView.getInt32(72, true)
	}

	public get weaponWorkshop(): number {
		return this.dataView.getInt32(80, true)
	}

	public get weaponWorkshopAmount(): number {
		return this.dataView.getInt32(88, true)
	}

	public get bike(): number {
		return this.dataView.getInt32(96, true)
	}

	public get bikeAmount(): number {
		return this.dataView.getInt32(104, true)
	}

	public get bikeWorkshop(): number {
		return this.dataView.getInt32(112, true)
	}

	public get bikeWorkshopAmount(): number {
		return this.dataView.getInt32(120, true)
	}
}