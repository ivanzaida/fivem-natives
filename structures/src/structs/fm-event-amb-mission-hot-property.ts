import { FmEventAmbientMission } from './fm-event-ambient-mission'

export class FmEventAmbMissionHotProperty {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(112))) {
		if (dataView.byteLength !== 112) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get data(): FmEventAmbientMission {
		return new FmEventAmbientMission(new DataView(this.dataView.buffer.slice(0, 96)))
	}

	public get numTimesBriefcaseExchangeHands(): number {
		return this.dataView.getInt32(96, true)
	}

	public get timeBriefecaseHeld(): number {
		return this.dataView.getInt32(104, true)
	}
}