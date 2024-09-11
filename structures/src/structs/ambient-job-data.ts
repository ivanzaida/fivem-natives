export class AmbientJobData {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(32))) {
		if (dataView.byteLength !== 32) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get v1(): number {
		return this.dataView.getInt32(0, true)
	}

	public get v2(): number {
		return this.dataView.getInt32(8, true)
	}

	public get v3(): number {
		return this.dataView.getInt32(16, true)
	}

	public get v4(): number {
		return this.dataView.getInt32(24, true)
	}
}