export class NetworkRosChanged {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(16))) {
		if (dataView.byteLength !== 16) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get validCredentials(): boolean {
		return this.dataView.getInt8(0) === 1;
	}

	public get validRockstarId(): boolean {
		return this.dataView.getInt8(8) === 1;
	}
}