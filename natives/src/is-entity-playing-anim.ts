import { EntityIndex, EAnimType } from '@ivanzaida/structures'

/**
 * ENTITY:IS_ENTITY_PLAYING_ANIM
 *
 * 0x13CCB1AD131C1082

 * 
 * See also PED::IS_SCRIPTED_SCENARIO_PED_USING_CONDITIONAL_ANIM 0x6EC47A344923E1ED 0x3C30B447
 * 
 * Taken from ENTITY::IS_ENTITY_PLAYING_ANIM(PLAYER::PLAYER_PED_ID(), "creatures@shark@move", "attack_player", 3)
 * 
 * p4 is always 3 in the scripts.
 * 
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {string} animDictName
 * @param {string} animName
 * @param {EAnimType} type
 * @returns {boolean}  
 */
export function isEntityPlayingAnim(entity: EntityIndex, animDictName: string, animName: string, type: EAnimType | number = 3): boolean {
	const isEntityPlayingAnim_result = Citizen.invokeNative<boolean>('0x13CCB1AD131C1082', entity, animDictName, animName, type);
	return isEntityPlayingAnim_result;
}