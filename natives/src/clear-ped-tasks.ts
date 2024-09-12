import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:CLEAR_PED_TASKS
 *
 * 0x974022927CB47E68

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function clearPedTasks(ped: PedIndex): void {
	const clearPedTasks_result = Citizen.invokeNative<void>('0x974022927CB47E68', ped);
	return clearPedTasks_result;
}