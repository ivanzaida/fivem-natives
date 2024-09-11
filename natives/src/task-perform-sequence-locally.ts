import { PedIndex, SequenceIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_PERFORM_SEQUENCE_LOCALLY
 *
 * 0x9C4B07B40A05D45D

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {SequenceIndex} sequence
 */
export function taskPerformSequenceLocally(ped: PedIndex, sequence: SequenceIndex): void {
	const taskPerformSequenceLocally_result = Citizen.invokeNative<void>('0x9C4B07B40A05D45D', ped, sequence);
	return taskPerformSequenceLocally_result;
}