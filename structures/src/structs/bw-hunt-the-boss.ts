import { BwBossWork } from './bw-boss-work'

export class BwHuntTheBoss {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(128))) {
		if (dataView.byteLength !== 128) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get data(): BwBossWork {
		return new BwBossWork(new DataView(this.dataView.buffer.slice(0, 112)))
	}

	public get launchedByBoss(): number {
		return this.dataView.getInt32(112, true)
	}

	public get variationPlayed(): number {
		return this.dataView.getInt32(120, true)
	}
}