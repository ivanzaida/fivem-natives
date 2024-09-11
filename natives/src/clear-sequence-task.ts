import { IntRef } from '@ivanzaida/structures'

/**
 * TASK:CLEAR_SEQUENCE_TASK
 *
 * 0xD0557B139A542F12

 * 
 * ------------------------------------------------------------------
 * @param {IntRef} sequence [Ref]
 */
export function clearSequenceTask(sequence: IntRef /* ptr */): void {
	const clearSequenceTask_result = Citizen.invokeNative<void>('0xD0557B139A542F12', sequence.dataView);
	return clearSequenceTask_result;
}