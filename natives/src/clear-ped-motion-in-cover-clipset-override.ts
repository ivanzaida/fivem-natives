import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:CLEAR_PED_MOTION_IN_COVER_CLIPSET_OVERRIDE
 *
 * 0x8ED4FEE426B22F3D

 * 
 * Clear this peds different motion in cover clipset.  Should be called after using SET_PED_MOTION_IN_COVER_CLIPSET_OVERRIDE
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function clearPedMotionInCoverClipsetOverride(ped: PedIndex): void {
	const clearPedMotionInCoverClipsetOverride_result = Citizen.invokeNative<void>('0x8ED4FEE426B22F3D', ped);
	return clearPedMotionInCoverClipsetOverride_result;
}