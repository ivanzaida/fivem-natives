import { FmEventAmbientMission } from './fm-event-ambient-mission'

export class FmEventAmbMissionKingoftheCastle {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(128))) {
		if (dataView.byteLength !== 128) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get data(): FmEventAmbientMission {
		return new FmEventAmbientMission(new DataView(this.dataView.buffer.slice(0, 96)))
	}

	public get numOfKings(): number {
		return this.dataView.getInt32(96, true)
	}

	public get killsAsKing(): number {
		return this.dataView.getInt32(104, true)
	}

	public get deathsAsKing(): number {
		return this.dataView.getInt32(112, true)
	}

	public get areaControlPoints(): number {
		return this.dataView.getInt32(120, true)
	}
}