export class SpendClubHouse {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(160))) {
		if (dataView.byteLength !== 160) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get propertyId(): number {
		return this.dataView.getInt32(0, true)
	}

	public get propertyIdAmount(): number {
		return this.dataView.getInt32(8, true)
	}

	public get muralType(): number {
		return this.dataView.getInt32(16, true)
	}

	public get muralTypeAmount(): number {
		return this.dataView.getInt32(24, true)
	}

	public get wallStyle(): number {
		return this.dataView.getInt32(32, true)
	}

	public get wallStyleAmount(): number {
		return this.dataView.getInt32(40, true)
	}

	public get wallHangingStyle(): number {
		return this.dataView.getInt32(48, true)
	}

	public get wallHangingStyleAmount(): number {
		return this.dataView.getInt32(56, true)
	}

	public get furnitureStyle(): number {
		return this.dataView.getInt32(64, true)
	}

	public get furnitureStyleAmount(): number {
		return this.dataView.getInt32(72, true)
	}

	public get emblem(): number {
		return this.dataView.getInt32(80, true)
	}

	public get emblemAmount(): number {
		return this.dataView.getInt32(88, true)
	}

	public get gunLocker(): number {
		return this.dataView.getInt32(96, true)
	}

	public get gunLockerAmount(): number {
		return this.dataView.getInt32(104, true)
	}

	public get modShop(): number {
		return this.dataView.getInt32(112, true)
	}

	public get modShopAmount(): number {
		return this.dataView.getInt32(120, true)
	}

	public get signage(): number {
		return this.dataView.getInt32(128, true)
	}

	public get signageAmount(): number {
		return this.dataView.getInt32(136, true)
	}

	public get font(): number {
		return this.dataView.getInt32(144, true)
	}

	public get fontAmount(): number {
		return this.dataView.getInt32(152, true)
	}
}