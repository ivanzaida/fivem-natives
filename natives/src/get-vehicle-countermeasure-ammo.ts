import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_COUNTERMEASURE_AMMO
 *
 * 0x61B116A4C9C5B984

 * 
 * Gets the current countermeasure ammo count for a script vehicle.
 * Unlike restricted vehicle ammo (which is code fired), this is script-fired and manually decremented, and only stored in vehicle code for network sync purposes.
 * 
 * Similar to `GET_VEHICLE_BOMB_AMMO`, this gets the amount of countermeasures that are present on this vehicle.
 * Use SET_VEHICLE_COUNTERMEASURE_AMMO to set the current amount.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleCountermeasureAmmo(vehicle: VehicleIndex): number {
	const getVehicleCountermeasureAmmo_result = Citizen.invokeNative<number>('0x61B116A4C9C5B984', vehicle);
	return getVehicleCountermeasureAmmo_result;
}