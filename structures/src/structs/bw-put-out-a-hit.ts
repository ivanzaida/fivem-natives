import { BwBossWork } from './bw-boss-work'

export class BwPutOutAHit {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(120))) {
		if (dataView.byteLength !== 120) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get data(): BwBossWork {
		return new BwBossWork(new DataView(this.dataView.buffer.slice(0, 112)))
	}

	public get hitMethodSelected(): number {
		return this.dataView.getInt32(112, true)
	}
}