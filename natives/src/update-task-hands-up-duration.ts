import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:UPDATE_TASK_HANDS_UP_DURATION
 *
 * 0xAD548E64669C4255

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} time
 */
export function updateTaskHandsUpDuration(ped: PedIndex, time: number): void {
	const updateTaskHandsUpDuration_result = Citizen.invokeNative<void>('0xAD548E64669C4255', ped, time);
	return updateTaskHandsUpDuration_result;
}