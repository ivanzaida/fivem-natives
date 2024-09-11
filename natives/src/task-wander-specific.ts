import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_WANDER_SPECIFIC
 *
 * 0xFDBB3471DA96A6F4

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} conditionalAnimGroup
 * @param {string} conditionalAnim
 * @param {number} heading
 */
export function taskWanderSpecific(ped: PedIndex, conditionalAnimGroup: string, conditionalAnim: string, heading: number = 40000): void {
	const taskWanderSpecific_result = Citizen.invokeNative<void>('0xFDBB3471DA96A6F4', ped, conditionalAnimGroup, conditionalAnim, heading);
	return taskWanderSpecific_result;
}