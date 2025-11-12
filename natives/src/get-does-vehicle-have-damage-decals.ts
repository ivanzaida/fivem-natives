import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_DOES_VEHICLE_HAVE_DAMAGE_DECALS
 *
 * 0xB69AE16F62A14003

 * 
 * Appears to return true if the vehicle has any damage, including cosmetically.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function getDoesVehicleHaveDamageDecals(vehicle: VehicleIndex): boolean {
	const getDoesVehicleHaveDamageDecals_result = Citizen.invokeNative<boolean>('0xB69AE16F62A14003', vehicle);
	return getDoesVehicleHaveDamageDecals_result;
}