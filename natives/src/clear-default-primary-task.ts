import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:CLEAR_DEFAULT_PRIMARY_TASK
 *
 * 0xDF671228EB81F6F6

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function clearDefaultPrimaryTask(ped: PedIndex): void {
	const clearDefaultPrimaryTask_result = Citizen.invokeNative<void>('0xDF671228EB81F6F6', ped);
	return clearDefaultPrimaryTask_result;
}