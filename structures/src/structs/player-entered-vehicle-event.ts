import { PlayerIndex } from '../typedefs/player-index'
import { VehicleIndex } from '../typedefs/vehicle-index'

export class PlayerEnteredVehicleEvent {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(16))) {
		if (dataView.byteLength !== 16) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get playerIndex(): PlayerIndex {
		return this.dataView.getInt32(0, true)
	}

	public get vehicleIndex(): VehicleIndex {
		return this.dataView.getInt32(8, true)
	}
}