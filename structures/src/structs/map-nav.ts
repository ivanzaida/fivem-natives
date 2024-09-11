export class MapNav {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(56))) {
		if (dataView.byteLength !== 56) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get tUBlips(): number {
		return this.dataView.getInt32(0, true)
	}

	public get cloudMissBlips(): number {
		return this.dataView.getInt32(8, true)
	}

	public get seriesBlips(): number {
		return this.dataView.getInt32(16, true)
	}

	public get collectBlips(): number {
		return this.dataView.getInt32(24, true)
	}

	public get rank(): number {
		return this.dataView.getInt32(32, true)
	}

	public get leftBy(): number {
		return this.dataView.getInt32(40, true)
	}

	public get waypoint(): number {
		return this.dataView.getInt32(48, true)
	}
}