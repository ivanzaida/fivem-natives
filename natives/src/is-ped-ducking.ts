import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_DUCKING
 *
 * 0xDC91B9320E14F119

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedDucking(ped: PedIndex): boolean {
	const isPedDucking_result = Citizen.invokeNative<boolean>('0xDC91B9320E14F119', ped);
	return isPedDucking_result;
}