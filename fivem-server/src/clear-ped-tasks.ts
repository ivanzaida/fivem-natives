import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:CLEAR_PED_TASKS
 *
 * 0XDE3316AB

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function clearPedTasks(ped: PedIndex): void {
	const clearPedTasks_result = Citizen.invokeNative<void>('0XDE3316AB', ped);
	return clearPedTasks_result;
}