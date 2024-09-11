import { PedIndex } from '../typedefs/ped-index'
import { EArrestEventTypes } from '../enums/'

export class PlayerArrestEvent {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(24))) {
		if (dataView.byteLength !== 24) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get arresterIndex(): PedIndex {
		return this.dataView.getInt32(0, true)
	}

	public get arresteeIndex(): PedIndex {
		return this.dataView.getInt32(8, true)
	}

	public get arrestEventType(): EArrestEventTypes {
		return this.dataView.getInt32(16, true) as EArrestEventTypes
	}
}