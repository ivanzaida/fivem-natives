import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_IN_ANY_SUB
 *
 * 0x483232F244CDBFC6

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedInAnySub(ped: PedIndex): boolean {
	const isPedInAnySub_result = Citizen.invokeNative<boolean>('0x483232F244CDBFC6', ped);
	return isPedInAnySub_result;
}