import { EBailReason } from '../enums/'

export class BailEvent {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(16))) {
		if (dataView.byteLength !== 16) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get nBailReason(): EBailReason {
		return this.dataView.getInt32(0, true) as EBailReason
	}

	public get bailErrorCode(): number {
		return this.dataView.getInt32(8, true)
	}
}