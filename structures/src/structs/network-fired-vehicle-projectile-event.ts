import { VehicleIndex } from '../typedefs/vehicle-index'
import { PedIndex } from '../typedefs/ped-index'
import { EntityIndex } from '../typedefs/entity-index'

export class NetworkFiredVehicleProjectileEvent {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(32))) {
		if (dataView.byteLength !== 32) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get firingVehicleIndex(): VehicleIndex {
		return this.dataView.getInt32(0, true)
	}

	public get firingPedIndex(): PedIndex {
		return this.dataView.getInt32(8, true)
	}

	public get firedProjectileIndex(): EntityIndex {
		return this.dataView.getInt32(16, true)
	}

	public get weaponType(): number {
		return this.dataView.getInt32(24, true)
	}
}