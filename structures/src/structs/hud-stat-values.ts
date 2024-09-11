export class HudStatValues {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(40))) {
		if (dataView.byteLength !== 40) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get damage(): number {
		return this.dataView.getInt32(0, true)
	}

	public get speed(): number {
		return this.dataView.getInt32(8, true)
	}

	public get capacity(): number {
		return this.dataView.getInt32(16, true)
	}

	public get accuracy(): number {
		return this.dataView.getInt32(24, true)
	}

	public get range(): number {
		return this.dataView.getInt32(32, true)
	}
}