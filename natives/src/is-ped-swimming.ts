import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_SWIMMING
 *
 * 0x2CFBD7757B4D922F

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedSwimming(ped: PedIndex): boolean {
	const isPedSwimming_result = Citizen.invokeNative<boolean>('0x2CFBD7757B4D922F', ped);
	return isPedSwimming_result;
}