import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_STAND_STILL
 *
 * 0x0FD8B5F4BB15CD71

 * 
 * Makes the specified ped stand still for (time) milliseconds.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} time
 */
export function taskStandStill(ped: PedIndex, time: number): void {
	const taskStandStill_result = Citizen.invokeNative<void>('0x0FD8B5F4BB15CD71', ped, time);
	return taskStandStill_result;
}