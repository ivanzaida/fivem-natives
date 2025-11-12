import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_USE_MOBILE_PHONE_TIMED
 *
 * 0xE69B8FE2F4FD0178

 * 
 * If -1 is passed to Time the ped will never give up on the task.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} time
 */
export function taskUseMobilePhoneTimed(ped: PedIndex, time: number): void {
	const taskUseMobilePhoneTimed_result = Citizen.invokeNative<void>('0xE69B8FE2F4FD0178', ped, time);
	return taskUseMobilePhoneTimed_result;
}