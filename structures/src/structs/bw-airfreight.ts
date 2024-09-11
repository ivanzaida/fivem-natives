import { BwBossWork } from './bw-boss-work'

export class BwAirfreight {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(144))) {
		if (dataView.byteLength !== 144) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get data(): BwBossWork {
		return new BwBossWork(new DataView(this.dataView.buffer.slice(0, 112)))
	}

	public get containerDisconnected(): number {
		return this.dataView.getInt32(112, true)
	}

	public get targetLocation(): number {
		return this.dataView.getInt32(120, true)
	}

	public get containerLocation(): number {
		return this.dataView.getInt32(128, true)
	}

	public get launchedByBoss(): number {
		return this.dataView.getInt32(136, true)
	}
}