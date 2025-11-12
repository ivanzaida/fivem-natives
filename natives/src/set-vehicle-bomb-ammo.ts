import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_BOMB_AMMO
 *
 * 0x8955FB58835651A2

 * 
 * Sets the current bomb ammo count for a script vehicle.
 * Unlike restricted vehicle ammo (which is code fired), this is script-fired and manually decremented, and only stored in vehicle code for network sync purposes.
 * 
 * Sets the amount of bombs that this vehicle has. As far as I know, this does _not_ impact vehicle weapons or the ammo of those weapons in any way, it is just a way to keep track of the amount of bombs in a specific plane.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} ammoCount
 */
export function setVehicleBombAmmo(vehicle: VehicleIndex, ammoCount: number): void {
	const setVehicleBombAmmo_result = Citizen.invokeNative<void>('0x8955FB58835651A2', vehicle, ammoCount);
	return setVehicleBombAmmo_result;
}