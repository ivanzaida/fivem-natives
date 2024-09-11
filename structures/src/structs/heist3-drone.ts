export class Heist3Drone {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(72))) {
		if (dataView.byteLength !== 72) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get missionName(): number {
		return this.dataView.getInt32(0, true)
	}

	public get playthroughId(): number {
		return this.dataView.getInt32(8, true)
	}

	public get endReason(): number {
		return this.dataView.getInt32(16, true)
	}

	public get time(): number {
		return this.dataView.getInt32(24, true)
	}

	public get totalDroneTases(): number {
		return this.dataView.getInt32(32, true)
	}

	public get totalDroneTranq(): number {
		return this.dataView.getInt32(40, true)
	}

	public get nano(): boolean {
		return this.dataView.getInt8(48) === 1;
	}

	public get cpCollected(): number {
		return this.dataView.getInt32(56, true)
	}

	public get targetsKilled(): number {
		return this.dataView.getInt32(64, true)
	}
}