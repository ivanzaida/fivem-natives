import { BwBossWork } from './bw-boss-work'

export class BwYatchAttack {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(136))) {
		if (dataView.byteLength !== 136) {
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

	public get totalCapturingScore(): number {
		return this.dataView.getInt32(120, true)
	}

	public get totalUnderAttackScore(): number {
		return this.dataView.getInt32(128, true)
	}
}