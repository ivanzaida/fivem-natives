import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_CLEAR_LOOK_AT
 *
 * 0x84B06A81C98DA4B8

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function taskClearLookAt(ped: PedIndex): void {
	const taskClearLookAt_result = Citizen.invokeNative<void>('0x84B06A81C98DA4B8', ped);
	return taskClearLookAt_result;
}