import { PedIndex } from '@ivanzaida/structures'

/**
 * MISC:PLAY_TENNIS_SWING_ANIM
 *
 * 0x66D844353F51465F

 * 
 * Play tennis swing animation
 * 
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} animDictName
 * @param {string} animName
 * @param {number} startPhase
 * @param {number} playRate
 * @param {boolean} slowBlend
 */
export function playTennisSwingAnim(ped: PedIndex, animDictName: string, animName: string, startPhase: number = 0, playRate: number = 1, slowBlend: boolean = false): void {
	const playTennisSwingAnim_result = Citizen.invokeNative<void>('0x66D844353F51465F', ped, animDictName, animName, startPhase, playRate, slowBlend);
	return playTennisSwingAnim_result;
}