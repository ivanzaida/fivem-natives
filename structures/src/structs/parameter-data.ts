export class ParameterData {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(16))) {
		if (dataView.byteLength !== 16) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get parameterID(): number {
		return this.dataView.getInt32(0, true)
	}

	public get parameterValue(): number {
		return this.dataView.getInt32(8, true)
	}
}