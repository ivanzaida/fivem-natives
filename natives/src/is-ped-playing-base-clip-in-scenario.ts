import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:IS_PED_PLAYING_BASE_CLIP_IN_SCENARIO
 *
 * 0x79D8334A10A1DB2E

 * 
 * This is a slightly stronger check than IS_PED_ACTIVE_IN_SCENARIO.  The given ped will not be t-posing or in their low lod base.
 * 
 * Used only once (am_mp_property_int)
 * 
 * ped was PLAYER_PED_ID()
 * 
 * Related to CTaskAmbientClips.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedPlayingBaseClipInScenario(ped: PedIndex): boolean {
	const isPedPlayingBaseClipInScenario_result = Citizen.invokeNative<boolean>('0x79D8334A10A1DB2E', ped);
	return isPedPlayingBaseClipInScenario_result;
}