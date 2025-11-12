import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:GET_ENTITY_ANIM_TOTAL_TIME
 *
 * 0x58C2315AA20FAF06

 * 
 * Returns a float value representing animation's total playtime in milliseconds.
 * 
 * Example:
 * GET_ENTITY_ANIM_TOTAL_TIME(PLAYER_ID(),"amb@world_human_yoga@female@base","base_b")
 * return 20800.000000
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
export function getEntityAnimTotalTime(entity: EntityIndex, animDictName: string, animName: string): number {
	const getEntityAnimTotalTime_result = Citizen.invokeNative<number>('0x58C2315AA20FAF06', entity, animDictName, animName);
	return getEntityAnimTotalTime_result;
}