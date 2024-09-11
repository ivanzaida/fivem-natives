import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_IN_ANY_BOAT
 *
 * 0xE70AAE8EBF7D65BD

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedInAnyBoat(ped: PedIndex): boolean {
	const isPedInAnyBoat_result = Citizen.invokeNative<boolean>('0xE70AAE8EBF7D65BD', ped);
	return isPedInAnyBoat_result;
}