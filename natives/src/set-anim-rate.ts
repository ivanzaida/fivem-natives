import { EntityIndex, EAnimPriorityFlags } from '@ivanzaida/structures'

/**
 * TASK:SET_ANIM_RATE
 *
 * 0x5D15315EA989E69A

 * 
 * Sets the current rate of the clips on a priority level on the scripted anim task,
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {number} rate
 * @param {EAnimPriorityFlags} priority
 * @param {boolean} secondary
 */
export function setAnimRate(entity: EntityIndex, rate: number, priority: EAnimPriorityFlags | number = 0, secondary: boolean = false): void {
	const setAnimRate_result = Citizen.invokeNative<void>('0x5D15315EA989E69A', entity, rate, priority, secondary);
	return setAnimRate_result;
}