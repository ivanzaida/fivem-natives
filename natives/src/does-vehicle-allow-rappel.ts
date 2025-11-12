import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:DOES_VEHICLE_ALLOW_RAPPEL
 *
 * 0xEE6C44D4C8883EC4

 * 
 * Returns true if the vehicle has the FLAG_ALLOWS_RAPPEL flag set.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function doesVehicleAllowRappel(vehicle: VehicleIndex): boolean {
	const doesVehicleAllowRappel_result = Citizen.invokeNative<boolean>('0xEE6C44D4C8883EC4', vehicle);
	return doesVehicleAllowRappel_result;
}