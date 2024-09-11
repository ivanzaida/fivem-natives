import { BcBossChallenge } from './bc-boss-challenge'

export class BcMostWanted {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(128))) {
		if (dataView.byteLength !== 128) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get data(): BcBossChallenge {
		return new BcBossChallenge(new DataView(this.dataView.buffer.slice(0, 112)))
	}

	public get deaths(): number {
		return this.dataView.getInt32(112, true)
	}

	public get timeLasted(): number {
		return this.dataView.getInt32(120, true)
	}
}