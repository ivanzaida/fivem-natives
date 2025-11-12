import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_ON_VEHICLE
 *
 * 0x92D9D3367234ABE7

 * 
 * Gets a value indicating whether the specified ped is on top of any vehicle.
 * 
 * Return 1 when ped is on vehicle.
 * Return 0 when ped is not on a vehicle.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedOnVehicle(ped: PedIndex): boolean {
	const isPedOnVehicle_result = Citizen.invokeNative<boolean>('0x92D9D3367234ABE7', ped);
	return isPedOnVehicle_result;
}