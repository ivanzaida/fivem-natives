export class ItemHashArray {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(64))) {
		if (dataView.byteLength !== 64) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get hashs(): number[] {
		return [
			this.dataView.getInt32(0, true),
			this.dataView.getInt32(8, true),
			this.dataView.getInt32(16, true),
			this.dataView.getInt32(24, true),
			this.dataView.getInt32(32, true),
			this.dataView.getInt32(40, true),
			this.dataView.getInt32(48, true),
			this.dataView.getInt32(56, true)
		]
	}
}