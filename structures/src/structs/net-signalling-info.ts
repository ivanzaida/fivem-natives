export class NetSignallingInfo {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(24))) {
		if (dataView.byteLength !== 24) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get totalMemSize(): number {
		return this.dataView.getInt32(0, true)
	}

	public get currentMemUsage(): number {
		return this.dataView.getInt32(8, true)
	}

	public get maxMemUsage(): number {
		return this.dataView.getInt32(16, true)
	}
}