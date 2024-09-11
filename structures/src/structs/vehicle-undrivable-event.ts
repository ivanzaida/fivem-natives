import { VehicleIndex } from '../typedefs/vehicle-index'
import { EntityIndex } from '../typedefs/entity-index'

export class VehicleUndrivableEvent {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(24))) {
		if (dataView.byteLength !== 24) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get vehicleId(): VehicleIndex {
		return this.dataView.getInt32(0, true)
	}

	public get damagerIndex(): EntityIndex {
		return this.dataView.getInt32(8, true)
	}

	public get weaponUsed(): number {
		return this.dataView.getInt32(16, true)
	}
}