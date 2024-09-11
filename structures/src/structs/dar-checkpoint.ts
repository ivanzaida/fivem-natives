export class DarCheckpoint {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(136))) {
		if (dataView.byteLength !== 136) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get startLocation(): number {
		return this.dataView.getInt32(0, true)
	}

	public get checkpoint1Complete(): number {
		return this.dataView.getInt32(8, true)
	}

	public get timeTakenToCompleteCheckpoint1(): number {
		return this.dataView.getInt32(16, true)
	}

	public get checkpoint2Complete(): number {
		return this.dataView.getInt32(24, true)
	}

	public get timeTakenToCompleteCheckpoint2(): number {
		return this.dataView.getInt32(32, true)
	}

	public get checkpoint3Complete(): number {
		return this.dataView.getInt32(40, true)
	}

	public get timeTakenToCompleteCheckpoint3(): number {
		return this.dataView.getInt32(48, true)
	}

	public get checkpoint4Complete(): number {
		return this.dataView.getInt32(56, true)
	}

	public get timeTakenToCompleteCheckpoint4(): number {
		return this.dataView.getInt32(64, true)
	}

	public get endLocation(): number {
		return this.dataView.getInt32(72, true)
	}

	public get darAcquired(): number {
		return this.dataView.getInt32(80, true)
	}

	public get totalTimeSpent(): number {
		return this.dataView.getInt32(88, true)
	}

	public get cashEarned(): number {
		return this.dataView.getInt32(96, true)
	}

	public get rPEarned(): number {
		return this.dataView.getInt32(104, true)
	}

	public get replay(): number {
		return this.dataView.getInt32(112, true)
	}

	public get failedReason(): number {
		return this.dataView.getInt32(120, true)
	}

	public get rockstarAccountIndicator(): number {
		return this.dataView.getInt32(128, true)
	}
}