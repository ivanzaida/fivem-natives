import { VehicleIndex } from '../typedefs/vehicle-index'
import { PedIndex } from '../typedefs/ped-index'

export class TimedExplosionEvent {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(16))) {
		if (dataView.byteLength !== 16) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get vehicleIndex(): VehicleIndex {
		return this.dataView.getInt32(0, true)
	}

	public get culpritIndex(): PedIndex {
		return this.dataView.getInt32(8, true)
	}
}