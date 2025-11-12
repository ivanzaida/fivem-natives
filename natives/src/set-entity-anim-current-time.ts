import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_ANIM_CURRENT_TIME
 *
 * 0x6D75623C644D6F83

 * 
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {string} animDictName
 * @param {string} animName
 * @param {number} newAnimCurrentTime
 */
export function setEntityAnimCurrentTime(entity: EntityIndex, animDictName: string, animName: string, newAnimCurrentTime: number): void {
	const setEntityAnimCurrentTime_result = Citizen.invokeNative<void>('0x6D75623C644D6F83', entity, animDictName, animName, newAnimCurrentTime);
	return setEntityAnimCurrentTime_result;
}