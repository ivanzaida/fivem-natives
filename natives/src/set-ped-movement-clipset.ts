import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_MOVEMENT_CLIPSET
 *
 * 0x4669032A1DFBB449

 * Makes the ped use a different movement clipset
 * e.g for making a fat ped run faster
 * The default movement clipset is defined in peds.meta under <MovementClipSet>
 * DON'T FORGET to stream in the new clipset before calling this
 * transitionSpeed is the time in seconds it takes to transition from one movement clipset to another.	ransitionSpeed is usually 1.0f
 * List of movement clipsets:
 * Thanks to elsewhat for list.
 *  "ANIM_GROUP_MOVE_BALLISTIC"
 *  "ANIM_GROUP_MOVE_LEMAR_ALLEY"
 *  "clipset@move@trash_fast_turn"
 *  "FEMALE_FAST_RUNNER"
 *  "missfbi4prepp1_garbageman"
 *  "move_characters@franklin@fire"
 *  "move_characters@Jimmy@slow@"
 *  "move_characters@michael@fire"
 *  "move_f@flee@a"
 *  "move_f@scared"
 *  "move_f@sexy@a"
 *  "move_heist_lester"
 *  "move_injured_generic"
 *  "move_lester_CaneUp"
 *  "move_m@bag"
 *  "MOVE_M@BAIL_BOND_NOT_TAZERED"
 *  "MOVE_M@BAIL_BOND_TAZERED"
 *  "move_m@brave"
 *  "move_m@casual@d"
 *  "move_m@drunk@moderatedrunk"
 *  "MOVE_M@DRUNK@MODERATEDRUNK"
 *  "MOVE_M@DRUNK@MODERATEDRUNK_HEAD_UP"
 *  "MOVE_M@DRUNK@SLIGHTLYDRUNK"
 *  "MOVE_M@DRUNK@VERYDRUNK"
 *  "move_m@fire"
 *  "move_m@gangster@var_e"
 *  "move_m@gangster@var_f"
 *  "move_m@gangster@var_i"
 *  "move_m@JOG@"
 *  "MOVE_M@PRISON_GAURD"
 *  "MOVE_P_M_ONE"
 *  "MOVE_P_M_ONE_BRIEFCASE"
 *  "move_p_m_zero_janitor"
 *  "move_p_m_zero_slow"
 *  "move_ped_bucket"
 *  "move_ped_crouched"
 *  "move_ped_mop"
 *  "MOVE_M@FEMME@"
 *  "MOVE_F@FEMME@"
 *  "MOVE_M@GANGSTER@NG"
 *  "MOVE_F@GANGSTER@NG"
 *  "MOVE_M@POSH@"
 *  "MOVE_F@POSH@"
 *  "MOVE_M@TOUGH_GUY@"
 *  "MOVE_F@TOUGH_GUY@"
 * ~ NotCrunchyTaco
 * Full list of movement clipsets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/movementClipsetsCompact.json
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} clipSet
 * @param {number} blendDuration
 */
export function setPedMovementClipset(ped: PedIndex, clipSet: string, blendDuration: number = 0.25): void {
	const setPedMovementClipset_result = Citizen.invokeNative<void>('0x4669032A1DFBB449', ped, clipSet, blendDuration);
	return setPedMovementClipset_result;
}