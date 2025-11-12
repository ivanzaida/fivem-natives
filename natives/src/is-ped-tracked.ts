import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_TRACKED
 *
 * 0xDEA601233F857293

 * 
 * Checks whether a ped is being tracked
 * Should be used before calling GET_TRACKED_PED_PIXELCOUNT to make sure
 * the ped is being tracked - if the ped is not tracked,
 * GET_TRACKED_PED_PIXELCOUNT will asert.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedTracked(ped: PedIndex): boolean {
	const isPedTracked_result = Citizen.invokeNative<boolean>('0xDEA601233F857293', ped);
	return isPedTracked_result;
}