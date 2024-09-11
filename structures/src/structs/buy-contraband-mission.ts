import { ContrabandMission } from './contraband-mission'

export class BuyContrabandMission {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(216))) {
		if (dataView.byteLength !== 216) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get data(): ContrabandMission {
		return new ContrabandMission(new DataView(this.dataView.buffer.slice(0, 144)))
	}

	public get startVolume(): number {
		return this.dataView.getInt32(144, true)
	}

	public get endVolume(): number {
		return this.dataView.getInt32(152, true)
	}

	public get startWarehouseCapacity(): number {
		return this.dataView.getInt32(160, true)
	}

	public get endWarehouseCapacity(): number {
		return this.dataView.getInt32(168, true)
	}

	public get contrabandDestroyed(): number {
		return this.dataView.getInt32(176, true)
	}

	public get contrabandDelivered(): number {
		return this.dataView.getInt32(184, true)
	}

	public get fromHackerTruck(): number {
		return this.dataView.getInt32(192, true)
	}

	public get properties(): number {
		return this.dataView.getInt32(200, true)
	}

	public get properties2(): number {
		return this.dataView.getInt32(208, true)
	}
}