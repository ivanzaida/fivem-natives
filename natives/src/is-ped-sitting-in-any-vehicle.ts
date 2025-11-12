import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_SITTING_IN_ANY_VEHICLE
 *
 * 0x27E68848F0E5D7D9

 * 
 * Detect if ped is in any vehicle
 * [True/False]
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedSittingInAnyVehicle(ped: PedIndex): boolean {
	const isPedSittingInAnyVehicle_result = Citizen.invokeNative<boolean>('0x27E68848F0E5D7D9', ped);
	return isPedSittingInAnyVehicle_result;
}