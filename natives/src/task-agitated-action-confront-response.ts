import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_AGITATED_ACTION_CONFRONT_RESPONSE
 *
 * 0x883E603A316F6D3B

 * 
 * Give agitated action task to the target ped with confront subtask
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} targetPed
 * @param {PedIndex} agitatorPed
 */
export function taskAgitatedActionConfrontResponse(targetPed: PedIndex, agitatorPed: PedIndex): void {
	const taskAgitatedActionConfrontResponse_result = Citizen.invokeNative<void>('0x883E603A316F6D3B', targetPed, agitatorPed);
	return taskAgitatedActionConfrontResponse_result;
}