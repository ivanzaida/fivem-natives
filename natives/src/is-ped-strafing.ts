import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:IS_PED_STRAFING
 *
 * 0x3D686813DBBECE04

 * 
 * What's strafing?
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedStrafing(ped: PedIndex): boolean {
	const isPedStrafing_result = Citizen.invokeNative<boolean>('0x3D686813DBBECE04', ped);
	return isPedStrafing_result;
}