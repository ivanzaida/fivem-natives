import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:PLAY_FACIAL_ANIM
 *
 * 0x7ACB6964CC7261E4

 * 
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} clipName
 * @param {string} clipDictName
 */
export function playFacialAnim(ped: PedIndex, clipName: string, clipDictName: string = null!): void {
	const playFacialAnim_result = Citizen.invokeNative<void>('0x7ACB6964CC7261E4', ped, clipName, clipDictName);
	return playFacialAnim_result;
}