import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_ACHIEVE_HEADING
 *
 * 0x2280392018BC0DD3

 * 
 * Makes the specified ped achieve the specified heading.
 * 
 * pedHandle: The handle of the ped to assign the task to.
 * heading: The desired heading.
 * timeout: The time, in milliseconds, to allow the task to complete. If the task times out, it is cancelled, and the ped will stay at the heading it managed to reach in the time.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} heading
 * @param {number} time
 */
export function taskAchieveHeading(ped: PedIndex, heading: number, time: number = 0): void {
	const taskAchieveHeading_result = Citizen.invokeNative<void>('0x2280392018BC0DD3', ped, heading, time);
	return taskAchieveHeading_result;
}