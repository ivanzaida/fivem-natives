export class DupeDetection {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(96))) {
		if (dataView.byteLength !== 96) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get locationBlocked(): number {
		return this.dataView.getInt32(0, true)
	}

	public get reasonBlocked(): number {
		return this.dataView.getInt32(8, true)
	}

	public get vehicleModel(): number {
		return this.dataView.getInt32(16, true)
	}

	public get dupesSold(): number {
		return this.dataView.getInt32(24, true)
	}

	public get blockedVehicles(): number {
		return this.dataView.getInt32(32, true)
	}

	public get ownedVehicles(): number {
		return this.dataView.getInt32(40, true)
	}

	public get garageSpace(): number {
		return this.dataView.getInt32(48, true)
	}

	public get exploitLevel(): number {
		return this.dataView.getInt32(56, true)
	}

	public get levelIncrease(): number {
		return this.dataView.getInt32(64, true)
	}

	public get iFruit(): boolean {
		return this.dataView.getInt8(72) === 1;
	}

	public get spareSlot1(): number {
		return this.dataView.getInt32(80, true)
	}

	public get spareSlot2(): number {
		return this.dataView.getInt32(88, true)
	}
}