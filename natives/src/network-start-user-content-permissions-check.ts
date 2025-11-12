import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_START_USER_CONTENT_PERMISSIONS_CHECK
 *
 * 0x12AEE383533D0E70

 * 
 * Always returns -1. Seems to be XB1 specific.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamer [Ref]
 * @returns {number}  
 */
export function networkStartUserContentPermissionsCheck(gamer: GamerHandle /* ptr */): number {
	const networkStartUserContentPermissionsCheck_result = Citizen.invokeNative<number>('0x12AEE383533D0E70', gamer.dataView);
	return networkStartUserContentPermissionsCheck_result;
}