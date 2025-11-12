import { PedIndex, SequenceIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_PERFORM_SEQUENCE
 *
 * 0x4BD42B0527065BB6

 * 
 * Requires OPEN_SEQUENCE_TASK ... CLOSE_SEQUENCE_TASK
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {SequenceIndex} sequence
 */
export function taskPerformSequence(ped: PedIndex, sequence: SequenceIndex): void {
	const taskPerformSequence_result = Citizen.invokeNative<void>('0x4BD42B0527065BB6', ped, sequence);
	return taskPerformSequence_result;
}