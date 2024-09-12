import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_JACKING
 *
 * 0x49CB27F641DC1328

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedJacking(ped: PedIndex): boolean {
	const isPedJacking_result = Citizen.invokeNative<boolean>('0x49CB27F641DC1328', ped);
	return isPedJacking_result;
}