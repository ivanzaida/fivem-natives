import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:IS_PED_STRAFING
 *
 * 0xEFEED13C

 * 
 * What's strafing?
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The target ped.
 * @returns {boolean}  
 */
export function isPedStrafing(ped: PedIndex): boolean {
	const isPedStrafing_result = Citizen.invokeNative<boolean>('0xEFEED13C', ped);
	return isPedStrafing_result;
}