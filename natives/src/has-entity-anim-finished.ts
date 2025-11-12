import { EntityIndex, EAnimType } from '@ivanzaida/structures'

/**
 * ENTITY:HAS_ENTITY_ANIM_FINISHED
 *
 * 0x67C276550F2DBF33

 * 
 * This command will only ever return true for anims that hold at the end (i.e. anims that loop or end automatically will always return false)
 * 
 * P3 is always 3 as far as i cant tell
 * 
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {string} animDictName
 * @param {string} animName
 * @param {EAnimType} animType
 * @returns {boolean}  
 */
export function hasEntityAnimFinished(entity: EntityIndex, animDictName: string, animName: string, animType: EAnimType | number = 3): boolean {
	const hasEntityAnimFinished_result = Citizen.invokeNative<boolean>('0x67C276550F2DBF33', entity, animDictName, animName, animType);
	return hasEntityAnimFinished_result;
}