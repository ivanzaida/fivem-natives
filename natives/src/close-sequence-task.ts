import { SequenceIndex } from '@ivanzaida/structures'

/**
 * TASK:CLOSE_SEQUENCE_TASK
 *
 * 0x93C0674FC00824D0

 * 
 * ------------------------------------------------------------------
 * @param {SequenceIndex} sequence
 */
export function closeSequenceTask(sequence: SequenceIndex): void {
	const closeSequenceTask_result = Citizen.invokeNative<void>('0x93C0674FC00824D0', sequence);
	return closeSequenceTask_result;
}