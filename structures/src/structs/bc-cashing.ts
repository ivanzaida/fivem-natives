import { BcBossChallenge } from './bc-boss-challenge'

export class BcCashing {
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

	public get machinesHacked(): number {
		return this.dataView.getInt32(112, true)
	}

	public get failedMinigamesRatio(): number {
		return this.dataView.getFloat32(120, true)
	}

	public get wantedLevelReached(): number {
		return this.dataView.getInt32(128, true)
	}
}