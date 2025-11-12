import { EntityIndex, EAnimPriorityFlags } from '@ivanzaida/structures'

/**
 * TASK:SET_ANIM_WEIGHT
 *
 * 0xD395C44C3F7C3BB4

 * 
 * Sets the blend weight of a clip playing on the scripted anim task,
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {number} blendWeight
 * @param {EAnimPriorityFlags} priority
 * @param {number} index The index of the clip to set on the given priority (used when the priority level is playing a blend of clips, when playing a single clip this can be left blank).
 * @param {boolean} secondary
 */
export function setAnimWeight(entity: EntityIndex, blendWeight: number, priority: EAnimPriorityFlags | number = 0, index: number = 0, secondary: boolean = false): void {
	const setAnimWeight_result = Citizen.invokeNative<void>('0xD395C44C3F7C3BB4', entity, blendWeight, priority, index, secondary);
	return setAnimWeight_result;
}