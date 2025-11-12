import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_STRAFE_CLIPSET
 *
 * 0x696095B298957860

 * 
 * Makes the ped use a different movement clip set for strafe/aim movement
 * The default strafe clipset is defined in peds.meta under <StrafeClipSet>
 * DON'T FORGET to stream in the new clipset before calling this
 * 
 * Full list of movement clipsets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/movementClipsetsCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} clipSet
 */
export function setPedStrafeClipset(ped: PedIndex, clipSet: string): void {
	const setPedStrafeClipset_result = Citizen.invokeNative<void>('0x696095B298957860', ped, clipSet);
	return setPedStrafeClipset_result;
}