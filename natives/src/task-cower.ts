import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_COWER
 *
 * 0xAFC7A89C990C4339

 * 
 * Not approved for use in network scripts
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} time
 */
export function taskCower(ped: PedIndex, time: number = 1): void {
	const taskCower_result = Citizen.invokeNative<void>('0xAFC7A89C990C4339', ped, time);
	return taskCower_result;
}