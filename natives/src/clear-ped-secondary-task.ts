import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:CLEAR_PED_SECONDARY_TASK
 *
 * 0xBEB96F1A510EE9AA

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function clearPedSecondaryTask(ped: PedIndex): void {
	const clearPedSecondaryTask_result = Citizen.invokeNative<void>('0xBEB96F1A510EE9AA', ped);
	return clearPedSecondaryTask_result;
}