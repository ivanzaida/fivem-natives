import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:GET_ENTITY_ANIM_CURRENT_TIME
 *
 * 0x82E64DE58A6B84A8

 * 
 * The phase of the anim is between 0.0 and 1.0 regardless of the anim length
 * 
 * Returns a float value representing animation's current playtime with respect to its total playtime. This value increasing in a range from [0 to 1] and wrap back to 0 when it reach 1.
 * 
 * Example:
 * 0.000000 - mark the starting of animation.
 * 0.500000 - mark the midpoint of the animation.
 * 1.000000 - mark the end of animation.
 * 
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {string} animDictName
 * @param {string} animName
 * @returns {number}  
 */
export function getEntityAnimCurrentTime(entity: EntityIndex, animDictName: string, animName: string): number {
	const getEntityAnimCurrentTime_result = Citizen.invokeNative<number>('0x82E64DE58A6B84A8', entity, animDictName, animName);
	return getEntityAnimCurrentTime_result;
}