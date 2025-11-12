import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:GET_PED_HEAD_OVERLAY
 *
 * 0x8E73BECF421D257E

 * 
 * Likely a char, if that overlay is not set, e.i. "None" option, returns 255;
 * 
 * This might be the once removed native GET_PED_HEAD_OVERLAY.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} slot
 * @returns {number}  
 */
export function getPedHeadOverlay(ped: PedIndex, slot: number): number {
	const getPedHeadOverlay_result = Citizen.invokeNative<number>('0x8E73BECF421D257E', ped, slot);
	return getPedHeadOverlay_result;
}