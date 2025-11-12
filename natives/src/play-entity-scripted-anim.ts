import { EntityIndex, AnimData } from '@ivanzaida/structures'

/**
 * TASK:PLAY_ENTITY_SCRIPTED_ANIM
 *
 * 0x24E88846ADF60E68

 * 
 * Plays one or more anims on the specified entity
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {AnimData} priorityLow [Ref]
 * @param {AnimData} priorityMid [Ref]
 * @param {AnimData} priorityHigh [Ref]
 * @param {number} taskBlendInDuration
 * @param {number} taskBlendOutDuration
 */
export function playEntityScriptedAnim(entity: EntityIndex, priorityLow: AnimData /* ptr */, priorityMid: AnimData /* ptr */, priorityHigh: AnimData /* ptr */, taskBlendInDuration: number = 0.125, taskBlendOutDuration: number = 0.125): void {
	const playEntityScriptedAnim_result = Citizen.invokeNative<void>('0x24E88846ADF60E68', entity, priorityLow.dataView, priorityMid.dataView, priorityHigh.dataView, taskBlendInDuration, taskBlendOutDuration);
	return playEntityScriptedAnim_result;
}