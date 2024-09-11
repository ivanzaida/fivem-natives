import { CheckpointIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:DELETE_CHECKPOINT
 *
 * 0xC2A5E7DCD1900AA1

 * 
 * ------------------------------------------------------------------
 * @param {CheckpointIndex} uniqueCheckpoint
 */
export function deleteCheckpoint(uniqueCheckpoint: CheckpointIndex): void {
	const deleteCheckpoint_result = Citizen.invokeNative<void>('0xC2A5E7DCD1900AA1', uniqueCheckpoint);
	return deleteCheckpoint_result;
}