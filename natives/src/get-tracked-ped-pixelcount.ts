import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:GET_TRACKED_PED_PIXELCOUNT
 *
 * 0x9AD0C5A6374B4A86

 * 
 * Test for a ped visibility using hardware visibility tracking
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {number}  
 */
export function getTrackedPedPixelcount(ped: PedIndex): number {
	const getTrackedPedPixelcount_result = Citizen.invokeNative<number>('0x9AD0C5A6374B4A86', ped);
	return getTrackedPedPixelcount_result;
}