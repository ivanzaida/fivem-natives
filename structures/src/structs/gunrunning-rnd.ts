export class GunrunningRnd {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(56))) {
		if (dataView.byteLength !== 56) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get bossId1(): number {
		return this.dataView.getInt32(0, true)
	}

	public get bossId2(): number {
		return this.dataView.getInt32(8, true)
	}

	public get startorEnd(): number {
		return this.dataView.getInt32(16, true)
	}

	public get upgradeType(): number {
		return this.dataView.getInt32(24, true)
	}

	public get staffPercentage(): number {
		return this.dataView.getInt32(32, true)
	}

	public get supplyAmount(): number {
		return this.dataView.getInt32(40, true)
	}

	public get productionAmount(): number {
		return this.dataView.getInt32(48, true)
	}
}