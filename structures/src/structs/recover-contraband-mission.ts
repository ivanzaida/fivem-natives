import { DefendContrabandMission } from './defend-contraband-mission'

export class RecoverContrabandMission {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(232))) {
		if (dataView.byteLength !== 232) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get data(): DefendContrabandMission {
		return new DefendContrabandMission(new DataView(this.dataView.buffer.slice(0, 224)))
	}

	public get lostDestroyedOrRecovered(): number {
		return this.dataView.getInt32(224, true)
	}
}