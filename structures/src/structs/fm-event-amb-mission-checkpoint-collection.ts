import { FmEventAmbientMission } from './fm-event-ambient-mission'

export class FmEventAmbMissionCheckpointCollection {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(192))) {
		if (dataView.byteLength !== 192) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get data(): FmEventAmbientMission {
		return new FmEventAmbientMission(new DataView(this.dataView.buffer.slice(0, 96)))
	}

	public get quarterMapChosen(): number {
		return this.dataView.getInt32(96, true)
	}

	public get numCheckpointsCollected(): number {
		return this.dataView.getInt32(104, true)
	}

	public get notCollectedCheckpoints_0(): number {
		return this.dataView.getInt32(112, true)
	}

	public get notCollectedCheckpoints_1(): number {
		return this.dataView.getInt32(120, true)
	}

	public get notCollectedCheckpoints_2(): number {
		return this.dataView.getInt32(128, true)
	}

	public get notCollectedCheckpoints_3(): number {
		return this.dataView.getInt32(136, true)
	}

	public get notCollectedCheckpoints_4(): number {
		return this.dataView.getInt32(144, true)
	}

	public get notCollectedCheckpoints_5(): number {
		return this.dataView.getInt32(152, true)
	}

	public get notCollectedCheckpoints_6(): number {
		return this.dataView.getInt32(160, true)
	}

	public get notCollectedCheckpoints_7(): number {
		return this.dataView.getInt32(168, true)
	}

	public get notCollectedCheckpoints_8(): number {
		return this.dataView.getInt32(176, true)
	}

	public get notCollectedCheckpoints_9(): number {
		return this.dataView.getInt32(184, true)
	}
}