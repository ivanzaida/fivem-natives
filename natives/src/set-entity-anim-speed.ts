import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_ANIM_SPEED
 *
 * 0x458AA1A01F53901E

 * 
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {string} animDictName
 * @param {string} animName
 * @param {number} animSpeed
 */
export function setEntityAnimSpeed(entity: EntityIndex, animDictName: string, animName: string, animSpeed: number): void {
	const setEntityAnimSpeed_result = Citizen.invokeNative<void>('0x458AA1A01F53901E', entity, animDictName, animName, animSpeed);
	return setEntityAnimSpeed_result;
}