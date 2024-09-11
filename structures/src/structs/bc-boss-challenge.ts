export class BcBossChallenge {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(112))) {
		if (dataView.byteLength !== 112) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get boss1(): number {
		return this.dataView.getInt32(0, true)
	}

	public get boss2(): number {
		return this.dataView.getInt32(8, true)
	}

	public get match1(): number {
		return this.dataView.getInt32(16, true)
	}

	public get match2(): number {
		return this.dataView.getInt32(24, true)
	}

	public get playerParticipated(): number {
		return this.dataView.getInt32(32, true)
	}

	public get timeStart(): number {
		return this.dataView.getInt32(40, true)
	}

	public get timeEnd(): number {
		return this.dataView.getInt32(48, true)
	}

	public get won(): number {
		return this.dataView.getInt32(56, true)
	}

	public get endingReason(): number {
		return this.dataView.getInt32(64, true)
	}

	public get cashEarned(): number {
		return this.dataView.getInt32(72, true)
	}

	public get rpEarned(): number {
		return this.dataView.getInt32(80, true)
	}

	public get bossKilled(): number {
		return this.dataView.getInt32(88, true)
	}

	public get goonsKilled(): number {
		return this.dataView.getInt32(96, true)
	}

	public get wagerSet(): number {
		return this.dataView.getInt32(104, true)
	}
}