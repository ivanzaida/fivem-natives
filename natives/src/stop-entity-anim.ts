import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:STOP_ENTITY_ANIM
 *
 * 0x1D949F0AD44C7F05

 * 
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * RAGEPluginHook list: docs.ragepluginhook.net/html/62951c37-a440-478c-b389-c471230ddfc5.htm
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {string} animName
 * @param {string} animDictName
 * @param {number} blendDelta
 * @returns {boolean}  
 */
export function stopEntityAnim(entity: EntityIndex, animName: string, animDictName: string, blendDelta: number): boolean {
	const stopEntityAnim_result = Citizen.invokeNative<boolean>('0x1D949F0AD44C7F05', entity, animName, animDictName, blendDelta);
	return stopEntityAnim_result;
}