import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_FLEEING
 *
 * 0xCA038E64C65D1F9D

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedFleeing(ped: PedIndex): boolean {
	const isPedFleeing_result = Citizen.invokeNative<boolean>('0xCA038E64C65D1F9D', ped);
	return isPedFleeing_result;
}