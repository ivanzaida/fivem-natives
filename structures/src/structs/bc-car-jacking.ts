import { BcBossChallenge } from './bc-boss-challenge'

export class BcCarJacking {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(120))) {
		if (dataView.byteLength !== 120) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get data(): BcBossChallenge {
		return new BcBossChallenge(new DataView(this.dataView.buffer.slice(0, 112)))
	}

	public get totalScore(): number {
		return this.dataView.getInt32(112, true)
	}
}