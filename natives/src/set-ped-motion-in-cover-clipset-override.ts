import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_MOTION_IN_COVER_CLIPSET_OVERRIDE
 *
 * 0x6D80A3E2F71A926F

 * 
 * Make the ped use different motion in cover clipset.
 * Be sure to clear the overide with CLEAR_PED_MOTION_IN_COVER_CLIPSET_OVERRIDE when finished!
 * DON'T FORGET to stream in the new clipset before calling this
 * 
 * Found in the b617d scripts:
 * PED::SET_PED_MOTION_IN_COVER_CLIPSET_OVERRIDE(v_7, "trevor_heist_cover_2h");
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} clipSet
 */
export function setPedMotionInCoverClipsetOverride(ped: PedIndex, clipSet: string): void {
	const setPedMotionInCoverClipsetOverride_result = Citizen.invokeNative<void>('0x6D80A3E2F71A926F', ped, clipSet);
	return setPedMotionInCoverClipsetOverride_result;
}