import { FmEventAmbientMission } from './fm-event-ambient-mission'

export class FmEventAmbMissionHuntBeast {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(104))) {
		if (dataView.byteLength !== 104) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get data(): FmEventAmbientMission {
		return new FmEventAmbientMission(new DataView(this.dataView.buffer.slice(0, 96)))
	}

	public get landmarksCollected(): number {
		return this.dataView.getInt32(96, true)
	}
}