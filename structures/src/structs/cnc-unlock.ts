export class CncUnlock {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(72))) {
		if (dataView.byteLength !== 72) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get item(): number {
		return this.dataView.getInt32(0, true)
	}

	public get itemType(): number {
		return this.dataView.getInt32(8, true)
	}

	public get itemRank(): number {
		return this.dataView.getInt32(16, true)
	}

	public get itemRole(): number {
		return this.dataView.getInt32(24, true)
	}

	public get progRank(): number {
		return this.dataView.getInt32(32, true)
	}

	public get tknSpend(): number {
		return this.dataView.getInt32(40, true)
	}

	public get tknBalance(): number {
		return this.dataView.getInt32(48, true)
	}

	public get moneySpend(): number {
		return this.dataView.getInt32(56, true)
	}

	public get moneyBalance(): number {
		return this.dataView.getInt32(64, true)
	}
}