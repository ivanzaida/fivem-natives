import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:REQUEST_PED_VISIBILITY_TRACKING
 *
 * 0x7A8C6BB4DA2434F1

 * 
 * Enable better ped visibility tracking
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function requestPedVisibilityTracking(ped: PedIndex): void {
	const requestPedVisibilityTracking_result = Citizen.invokeNative<void>('0x7A8C6BB4DA2434F1', ped);
	return requestPedVisibilityTracking_result;
}