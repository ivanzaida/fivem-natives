import { EntityIndex, EAnimPriorityFlags } from '@ivanzaida/structures'

/**
 * TASK:SET_ANIM_PHASE
 *
 * 0x8EF3D1BEA34BCB15

 * 
 * Sets the current phase of the clips on a priority level on the scripted anim task,
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {number} phase
 * @param {EAnimPriorityFlags} priority
 * @param {boolean} secondary
 */
export function setAnimPhase(entity: EntityIndex, phase: number, priority: EAnimPriorityFlags | number = 0, secondary: boolean = false): void {
	const setAnimPhase_result = Citizen.invokeNative<void>('0x8EF3D1BEA34BCB15', entity, phase, priority, secondary);
	return setAnimPhase_result;
}