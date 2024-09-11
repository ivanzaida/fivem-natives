import { FmEventAmbientMission } from './fm-event-ambient-mission'

export class FmEventAmbMissionPlaneDrop {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(120))) {
		if (dataView.byteLength !== 120) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get data(): FmEventAmbientMission {
		return new FmEventAmbientMission(new DataView(this.dataView.buffer.slice(0, 96)))
	}

	public get routeTaken(): number {
		return this.dataView.getInt32(96, true)
	}

	public get numCratesCollected(): number {
		return this.dataView.getInt32(104, true)
	}

	public get numCratesDropped(): number {
		return this.dataView.getInt32(112, true)
	}
}