import { BwBossWork } from './bw-boss-work'

export class BwFragileGoods {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(152))) {
		if (dataView.byteLength !== 152) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get data(): BwBossWork {
		return new BwBossWork(new DataView(this.dataView.buffer.slice(0, 112)))
	}

	public get destroyDisconnectedRatio(): number {
		return this.dataView.getFloat32(112, true)
	}

	public get targetLocation(): number {
		return this.dataView.getInt32(120, true)
	}

	public get startLocation(): number {
		return this.dataView.getInt32(128, true)
	}

	public get rivalGangDestination(): number {
		return this.dataView.getInt32(136, true)
	}

	public get launchedByBoss(): number {
		return this.dataView.getInt32(144, true)
	}
}