export class ExtraEvent {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(64))) {
		if (dataView.byteLength !== 64) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get missionName(): number {
		return this.dataView.getInt32(0, true)
	}

	public get pursuer(): number {
		return this.dataView.getInt32(8, true)
	}

	public get sessionId(): number {
		return this.dataView.getInt32(16, true)
	}

	public get endingReason(): number {
		return this.dataView.getInt32(24, true)
	}

	public get onFoot(): boolean {
		return this.dataView.getInt8(32) === 1;
	}

	public get time(): number {
		return this.dataView.getInt32(40, true)
	}

	public get timeLimit(): number {
		return this.dataView.getInt32(48, true)
	}

	public get pursuerHealth(): number {
		return this.dataView.getFloat32(56, true)
	}
}