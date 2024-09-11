import { BcBossChallenge } from './bc-boss-challenge'

export class BcSalvage {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(136))) {
		if (dataView.byteLength !== 136) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get data(): BcBossChallenge {
		return new BcBossChallenge(new DataView(this.dataView.buffer.slice(0, 112)))
	}

	public get checkpointsCollected(): number {
		return this.dataView.getInt32(112, true)
	}

	public get rebreathersCollected(): number {
		return this.dataView.getInt32(120, true)
	}

	public get deaths(): number {
		return this.dataView.getInt32(128, true)
	}
}