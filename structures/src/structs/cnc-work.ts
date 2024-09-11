export class CncWork {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(88))) {
		if (dataView.byteLength !== 88) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get matchId1(): number {
		return this.dataView.getInt32(0, true)
	}

	public get matchId2(): number {
		return this.dataView.getInt32(8, true)
	}

	public get jobId(): number {
		return this.dataView.getInt32(16, true)
	}

	public get roundNumber(): number {
		return this.dataView.getInt32(24, true)
	}

	public get role(): number {
		return this.dataView.getInt32(32, true)
	}

	public get workType(): number {
		return this.dataView.getInt32(40, true)
	}

	public get workName(): number {
		return this.dataView.getInt32(48, true)
	}

	public get endReason(): number {
		return this.dataView.getInt32(56, true)
	}

	public get dropOff(): number {
		return this.dataView.getInt32(64, true)
	}

	public get amount(): number {
		return this.dataView.getInt32(72, true)
	}

	public get bonus(): boolean {
		return this.dataView.getInt8(80) === 1;
	}
}