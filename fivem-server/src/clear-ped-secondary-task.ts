import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:CLEAR_PED_SECONDARY_TASK
 *
 * 0XA635F451

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function clearPedSecondaryTask(ped: PedIndex): void {
	const clearPedSecondaryTask_result = Citizen.invokeNative<void>('0XA635F451', ped);
	return clearPedSecondaryTask_result;
}