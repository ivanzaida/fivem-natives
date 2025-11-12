import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:REQUEST_PED_USE_SMALL_BBOX_VISIBILITY_TRACKING
 *
 * 0xB861E76BA27B15F1

 * 
 * Enable better ped's vehicle during visibility tracking
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} useSmallBox
 */
export function requestPedUseSmallBboxVisibilityTracking(ped: PedIndex, useSmallBox: boolean): void {
	const requestPedUseSmallBboxVisibilityTracking_result = Citizen.invokeNative<void>('0xB861E76BA27B15F1', ped, useSmallBox);
	return requestPedUseSmallBboxVisibilityTracking_result;
}