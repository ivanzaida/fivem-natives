export class VideoClipMetric {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(64))) {
		if (dataView.byteLength !== 64) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get characterHash(): number {
		return this.dataView.getInt32(0, true)
	}

	public get timeOfDay(): number {
		return this.dataView.getInt32(8, true)
	}

	public get weather(): number {
		return this.dataView.getInt32(16, true)
	}

	public get wantedLevel(): boolean {
		return this.dataView.getInt8(24) === 1;
	}

	public get pedDensity(): number {
		return this.dataView.getInt32(32, true)
	}

	public get vehicleDensity(): number {
		return this.dataView.getInt32(40, true)
	}

	public get restrictedArea(): boolean {
		return this.dataView.getInt8(48) === 1;
	}

	public get invulnerability(): boolean {
		return this.dataView.getInt8(56) === 1;
	}
}