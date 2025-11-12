import { EntityIndex } from '@ivanzaida/structures'

/**
 * TASK:STOP_ANIM_TASK
 *
 * 0x08D8528BA8E43641

 * 
 * Attempts to stop a play anim task initiated by TASK_PLAY_ANIM or TASK_PLAY_ANIM_ADVANCED
 * 
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {string} animDictName
 * @param {string} animName
 * @param {number} blendOutDelta
 */
export function stopAnimTask(entity: EntityIndex, animDictName: string, animName: string, blendOutDelta: number = 8): void {
	const stopAnimTask_result = Citizen.invokeNative<void>('0x08D8528BA8E43641', entity, animDictName, animName, blendOutDelta);
	return stopAnimTask_result;
}