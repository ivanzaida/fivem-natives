import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_PAUSE
 *
 * 0x5524CAF18378DF39

 * 
 * Stand still (?)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} time
 */
export function taskPause(ped: PedIndex, time: number): void {
	const taskPause_result = Citizen.invokeNative<void>('0x5524CAF18378DF39', ped, time);
	return taskPause_result;
}