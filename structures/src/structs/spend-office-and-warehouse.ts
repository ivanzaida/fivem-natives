export class SpendOfficeAndWarehouse {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(168))) {
		if (dataView.byteLength !== 168) {
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

	public get paGender(): number {
		return this.dataView.getInt32(32, true)
	}

	public get paGenderAmount(): number {
		return this.dataView.getInt32(40, true)
	}

	public get signage(): number {
		return this.dataView.getInt32(48, true)
	}

	public get signageAmount(): number {
		return this.dataView.getInt32(56, true)
	}

	public get gunLocker(): number {
		return this.dataView.getInt32(64, true)
	}

	public get gunLockerAmount(): number {
		return this.dataView.getInt32(72, true)
	}

	public get vault(): number {
		return this.dataView.getInt32(80, true)
	}

	public get vaultAmount(): number {
		return this.dataView.getInt32(88, true)
	}

	public get personalQuarters(): number {
		return this.dataView.getInt32(96, true)
	}

	public get personalQuartersAmount(): number {
		return this.dataView.getInt32(104, true)
	}

	public get warehouseSize(): number {
		return this.dataView.getInt32(112, true)
	}

	public get warehouseSizeAmount(): number {
		return this.dataView.getInt32(120, true)
	}

	public get smallWarehouses(): number {
		return this.dataView.getInt32(128, true)
	}

	public get mediumWarehouses(): number {
		return this.dataView.getInt32(136, true)
	}

	public get largeWarehouses(): number {
		return this.dataView.getInt32(144, true)
	}

	public get modShop(): number {
		return this.dataView.getInt32(152, true)
	}

	public get modShopAmount(): number {
		return this.dataView.getInt32(160, true)
	}
}