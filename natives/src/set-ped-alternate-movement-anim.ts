import { PedIndex, EAlternateAnimType } from '@ivanzaida/structures'

/**
 * PED:SET_PED_ALTERNATE_MOVEMENT_ANIM
 *
 * 0xCC2D0738666FD62D

 * 
 * Specifies a new movement animation to use when the ped is moving around
 * 
 * stance:
 * 0 = idle
 * 1 = walk
 * 2 = running
 * 
 * p5 = usually set to true
 * 
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * Full list of movement clipsets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/movementClipsetsCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EAlternateAnimType} type
 * @param {string} animDictionary
 * @param {string} anim
 * @param {number} blendDelta A float value specifying how fast the anim should blend in if the ped is already moving around
 * @param {boolean} looped
 */
export function setPedAlternateMovementAnim(ped: PedIndex, type: EAlternateAnimType | number, animDictionary: string, anim: string, blendDelta: number = 8, looped: boolean = true): void {
	const setPedAlternateMovementAnim_result = Citizen.invokeNative<void>('0xCC2D0738666FD62D', ped, type, animDictionary, anim, blendDelta, looped);
	return setPedAlternateMovementAnim_result;
}