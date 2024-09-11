import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_ON_FOOT
 *
 * 0x5B3431FA66D59A4C

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedOnFoot(ped: PedIndex): boolean {
	const isPedOnFoot_result = Citizen.invokeNative<boolean>('0x5B3431FA66D59A4C', ped);
	return isPedOnFoot_result;
}