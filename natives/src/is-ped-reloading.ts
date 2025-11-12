import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_RELOADING
 *
 * 0xC722DDBD6C3E86D7

 * 
 * Returns whether the specified ped is reloading.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedReloading(ped: PedIndex): boolean {
	const isPedReloading_result = Citizen.invokeNative<boolean>('0xC722DDBD6C3E86D7', ped);
	return isPedReloading_result;
}