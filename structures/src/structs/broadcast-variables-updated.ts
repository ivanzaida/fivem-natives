import { Threadid } from '../typedefs/threadid'

export class BroadcastVariablesUpdated {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(16))) {
		if (dataView.byteLength !== 16) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get thread(): Threadid {
		return this.dataView.getInt32(0, true)
	}

	public get type(): number {
		return this.dataView.getInt32(8, true)
	}
}