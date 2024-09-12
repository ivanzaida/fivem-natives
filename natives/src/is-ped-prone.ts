import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_PRONE
 *
 * 0x78174817EDF226B3

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedProne(ped: PedIndex): boolean {
	const isPedProne_result = Citizen.invokeNative<boolean>('0x78174817EDF226B3', ped);
	return isPedProne_result;
}