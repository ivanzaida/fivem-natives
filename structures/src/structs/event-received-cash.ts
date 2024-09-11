export class EventReceivedCash {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(16))) {
		if (dataView.byteLength !== 16) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get characterId(): number {
		return this.dataView.getInt32(0, true)
	}

	public get cashAmount(): number {
		return this.dataView.getInt32(8, true)
	}
}