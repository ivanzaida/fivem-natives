import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_ALTERNATE_WALK_ANIM
 *
 * 0x3AE0EEB34FAAC92B

 * 
 * Specifies a new walking animation to use when the ped is walking around
 * 
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * Full list of movement clipsets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/movementClipsetsCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} animDictionary
 * @param {string} anim
 * @param {number} blendDelta A float value specifying how fast the anim should blend in if the ped is already walking around
 * @param {boolean} looped
 */
export function setPedAlternateWalkAnim(ped: PedIndex, animDictionary: string, anim: string, blendDelta: number = 8, looped: boolean = true): void {
	const setPedAlternateWalkAnim_result = Citizen.invokeNative<void>('0x3AE0EEB34FAAC92B', ped, animDictionary, anim, blendDelta, looped);
	return setPedAlternateWalkAnim_result;
}