import { EntityIndex, EAnimPriorityFlags } from '@ivanzaida/structures'

/**
 * TASK:SET_ANIM_LOOPED
 *
 * 0x5EFA80915529F5C1

 * 
 * Sets wether the clips on a priority level on the scripted anim task should loop,
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} looped
 * @param {EAnimPriorityFlags} priority
 * @param {boolean} secondary
 */
export function setAnimLooped(entity: EntityIndex, looped: boolean, priority: EAnimPriorityFlags | number = 0, secondary: boolean = false): void {
	const setAnimLooped_result = Citizen.invokeNative<void>('0x5EFA80915529F5C1', entity, looped, priority, secondary);
	return setAnimLooped_result;
}