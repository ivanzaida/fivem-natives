import { PedIndex, SequenceIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_PERFORM_SEQUENCE_FROM_PROGRESS
 *
 * 0xDB27D5D6C78A71BD

 * 
 * Peds start the sequence at the Progress1’th element. If the Progress1’th element of the sequence is also a sequence it will start at the Progress2’th element.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {SequenceIndex} task
 * @param {number} progress1
 * @param {number} progress2
 */
export function taskPerformSequenceFromProgress(ped: PedIndex, task: SequenceIndex, progress1: number, progress2: number): void {
	const taskPerformSequenceFromProgress_result = Citizen.invokeNative<void>('0xDB27D5D6C78A71BD', ped, task, progress1, progress2);
	return taskPerformSequenceFromProgress_result;
}