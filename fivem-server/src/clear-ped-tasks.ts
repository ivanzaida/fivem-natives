import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:CLEAR_PED_TASKS
 *
 * 0xDE3316AB

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped Ped id. Use PlayerPedId() for your own character.
 */
export function clearPedTasks(ped: PedIndex): void {
	const clearPedTasks_result = Citizen.invokeNative<void>('0xDE3316AB', ped);
	return clearPedTasks_result;
}