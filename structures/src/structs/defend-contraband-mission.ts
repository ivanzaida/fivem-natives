import { BuyContrabandMission } from './buy-contraband-mission'

export class DefendContrabandMission {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(224))) {
		if (dataView.byteLength !== 224) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get data(): BuyContrabandMission {
		return new BuyContrabandMission(new DataView(this.dataView.buffer.slice(0, 216)))
	}

	public get enemiesKilled(): number {
		return this.dataView.getInt32(216, true)
	}
}