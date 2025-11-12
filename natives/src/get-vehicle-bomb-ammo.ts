import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_BOMB_AMMO
 *
 * 0x87CB58CAE436D6A5

 * 
 * Gets the current bomb ammo count for a script vehicle.
 * Unlike restricted vehicle ammo (which is code fired), this is script-fired and manually decremented, and only stored in vehicle code for network sync purposes.
 * 
 * Gets the amount of bombs that this vehicle has. As far as I know, this does _not_ impact vehicle weapons or the ammo of those weapons in any way, it is just a way to keep track of the amount of bombs in a specific plane.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleBombAmmo(vehicle: VehicleIndex): number {
	const getVehicleBombAmmo_result = Citizen.invokeNative<number>('0x87CB58CAE436D6A5', vehicle);
	return getVehicleBombAmmo_result;
}