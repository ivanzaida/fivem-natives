import { EntityIndex, EAnimPriorityFlags } from '@ivanzaida/structures'

/**
 * TASK:STOP_ANIM_PLAYBACK
 *
 * 0xE1C7B23ECC5080B5

 * 
 * Stops playback of animation on the given priority level of an existing TASK_SCRIPTED_ANIMATION
 * 
 * Looks like p1 may be a flag, still need to do some research, though.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {EAnimPriorityFlags} priority
 * @param {boolean} secondary
 */
export function stopAnimPlayback(entity: EntityIndex, priority: EAnimPriorityFlags | number = 0, secondary: boolean = false): void {
	const stopAnimPlayback_result = Citizen.invokeNative<void>('0xE1C7B23ECC5080B5', entity, priority, secondary);
	return stopAnimPlayback_result;
}