export class SpentOnTiltrotor {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(112))) {
		if (dataView.byteLength !== 112) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get aircraft(): number {
		return this.dataView.getInt32(0, true)
	}

	public get aircraftAmount(): number {
		return this.dataView.getInt32(8, true)
	}

	public get interiortint(): number {
		return this.dataView.getInt32(16, true)
	}

	public get interiortintAmount(): number {
		return this.dataView.getInt32(24, true)
	}

	public get turret(): number {
		return this.dataView.getInt32(32, true)
	}

	public get turretAmount(): number {
		return this.dataView.getInt32(40, true)
	}

	public get weaponworkshop(): number {
		return this.dataView.getInt32(48, true)
	}

	public get weaponworkshopAmount(): number {
		return this.dataView.getInt32(56, true)
	}

	public get vehicleworkshop(): number {
		return this.dataView.getInt32(64, true)
	}

	public get vehicleworkshopAmount(): number {
		return this.dataView.getInt32(72, true)
	}

	public get countermeasures(): number {
		return this.dataView.getInt32(80, true)
	}

	public get countermeasuresAmount(): number {
		return this.dataView.getInt32(88, true)
	}

	public get bombs(): number {
		return this.dataView.getInt32(96, true)
	}

	public get bombsAmount(): number {
		return this.dataView.getInt32(104, true)
	}
}