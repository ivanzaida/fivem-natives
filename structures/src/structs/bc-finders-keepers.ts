import { BcBossChallenge } from './bc-boss-challenge'

export class BcFindersKeepers {
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

	public get deaths(): number {
		return this.dataView.getInt32(112, true)
	}

	public get packagesCollected(): number {
		return this.dataView.getInt32(120, true)
	}

	public get quadrantSelected(): number {
		return this.dataView.getInt32(128, true)
	}
}