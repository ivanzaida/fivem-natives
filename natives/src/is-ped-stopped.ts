import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_STOPPED
 *
 * 0xD9CCFCDF70474932

 * 
 * Returns true if the ped doesn't do any movement. If the ped is being pushed forwards by using APPLY_FORCE_TO_ENTITY for example, the function returns false.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedStopped(ped: PedIndex): boolean {
	const isPedStopped_result = Citizen.invokeNative<boolean>('0xD9CCFCDF70474932', ped);
	return isPedStopped_result;
}