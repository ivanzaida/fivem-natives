import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:CLEAR_PED_FALL_UPPER_BODY_CLIPSET_OVERRIDE
 *
 * 0xBFCE94361188CEB2

 * 
 * Clear this peds different fall upperbody clipset.  Should be called after using SET_PED_MOTION_IN_COVER_CLIPSET_OVERRIDE
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function clearPedFallUpperBodyClipsetOverride(ped: PedIndex): void {
	const clearPedFallUpperBodyClipsetOverride_result = Citizen.invokeNative<void>('0xBFCE94361188CEB2', ped);
	return clearPedFallUpperBodyClipsetOverride_result;
}