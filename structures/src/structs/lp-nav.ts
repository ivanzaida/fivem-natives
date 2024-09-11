export class LpNav {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(40))) {
		if (dataView.byteLength !== 40) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get tab(): number {
		return this.dataView.getInt32(0, true)
	}

	public get hoverTile(): number {
		return this.dataView.getInt32(8, true)
	}

	public get leftBy(): number {
		return this.dataView.getInt32(16, true)
	}

	public get clickedTile(): number {
		return this.dataView.getInt32(24, true)
	}

	public get exitLp(): boolean {
		return this.dataView.getInt8(32) === 1;
	}
}