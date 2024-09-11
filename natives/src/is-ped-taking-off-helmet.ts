import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_TAKING_OFF_HELMET
 *
 * 0x1073851035816B77

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedTakingOffHelmet(ped: PedIndex): boolean {
	const isPedTakingOffHelmet_result = Citizen.invokeNative<boolean>('0x1073851035816B77', ped);
	return isPedTakingOffHelmet_result;
}