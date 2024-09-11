export class BusinessUtilBreakdown {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(136))) {
		if (dataView.byteLength !== 136) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get bunkerFees(): number {
		return this.dataView.getInt32(0, true)
	}

	public get weedFees(): number {
		return this.dataView.getInt32(8, true)
	}

	public get methFees(): number {
		return this.dataView.getInt32(16, true)
	}

	public get docForgeFees(): number {
		return this.dataView.getInt32(24, true)
	}

	public get fakeCashFees(): number {
		return this.dataView.getInt32(32, true)
	}

	public get cocaineFees(): number {
		return this.dataView.getInt32(40, true)
	}

	public get hangarFees(): number {
		return this.dataView.getInt32(48, true)
	}

	public get nightclubFees(): number {
		return this.dataView.getInt32(56, true)
	}

	public get nightclubStaff(): number {
		return this.dataView.getInt32(64, true)
	}

	public get execOfficeFees(): number {
		return this.dataView.getInt32(72, true)
	}

	public get execAssistantFees(): number {
		return this.dataView.getInt32(80, true)
	}

	public get smallWhouseFees(): number {
		return this.dataView.getInt32(88, true)
	}

	public get mediumWhouseFees(): number {
		return this.dataView.getInt32(96, true)
	}

	public get largeWhouseFees(): number {
		return this.dataView.getInt32(104, true)
	}

	public get arcadeFees(): number {
		return this.dataView.getInt32(112, true)
	}

	public get autoShopFees(): number {
		return this.dataView.getInt32(120, true)
	}

	public get fixerAgencyFees(): number {
		return this.dataView.getInt32(128, true)
	}
}