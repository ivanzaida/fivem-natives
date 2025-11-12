import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_STOP_PHONE_GESTURE_ANIMATION
 *
 * 0x0A284376577BBECE

 * 
 * Stops a player phone animation
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} blendOutOverride
 */
export function taskStopPhoneGestureAnimation(ped: PedIndex, blendOutOverride: number = 1): void {
	const taskStopPhoneGestureAnimation_result = Citizen.invokeNative<void>('0x0A284376577BBECE', ped, blendOutOverride);
	return taskStopPhoneGestureAnimation_result;
}