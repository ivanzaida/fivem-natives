import { IntRef } from '@ivanzaida/structures'

/**
 * TASK:OPEN_SEQUENCE_TASK
 *
 * 0xB5396F1FB088FE38

 * 
 * Allows a ped to perform a sequnce of tasks. Any tasks added to a sequence must take in a Null ped_index.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {IntRef} sequence [Ref]
 */
export function openSequenceTask(sequence: IntRef /* ptr */): void {
	const openSequenceTask_result = Citizen.invokeNative<void>('0xB5396F1FB088FE38', sequence.dataView);
	return openSequenceTask_result;
}