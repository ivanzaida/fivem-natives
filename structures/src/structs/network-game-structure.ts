export class NetworkGameStructure {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(80))) {
		if (dataView.byteLength !== 80) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get options(): number[] {
		return [
			this.dataView.getInt32(0, true),
			this.dataView.getInt32(8, true),
			this.dataView.getInt32(16, true),
			this.dataView.getInt32(24, true),
			this.dataView.getInt32(32, true),
			this.dataView.getInt32(40, true),
			this.dataView.getInt32(48, true),
			this.dataView.getInt32(56, true),
			this.dataView.getInt32(64, true),
			this.dataView.getInt32(72, true)
		]
	}
}