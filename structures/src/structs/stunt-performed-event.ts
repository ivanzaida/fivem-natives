export class StuntPerformedEvent {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(16))) {
		if (dataView.byteLength !== 16) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get stuntType(): number {
		return this.dataView.getInt32(0, true)
	}

	public get value(): number {
		return this.dataView.getFloat32(8, true)
	}
}