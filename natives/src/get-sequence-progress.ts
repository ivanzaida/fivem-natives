import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:GET_SEQUENCE_PROGRESS
 *
 * 0x89EC60A4485FD199

 * 
 * Before calling this command, you should call GET_SCRIPT_TASK_STATUS to make sure that SCRIPT_TASK_PERFORM_SEQUENCE is running.
 * 
 * returned values:
 * 0 to 7 = task that's currently in progress, 0 meaning the first one.
 * -1 no task sequence in progress.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {number}  
 */
export function getSequenceProgress(ped: PedIndex): number {
	const getSequenceProgress_result = Citizen.invokeNative<number>('0x89EC60A4485FD199', ped);
	return getSequenceProgress_result;
}