import { CheckpointIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:SET_CHECKPOINT_FORCE_DIRECTION
 *
 * 0x0E90B81955102A66

 * 
 * ------------------------------------------------------------------
 * @param {CheckpointIndex} uniqueCheckpoint
 */
export function setCheckpointForceDirection(uniqueCheckpoint: CheckpointIndex): void {
	const setCheckpointForceDirection_result = Citizen.invokeNative<void>('0x0E90B81955102A66', uniqueCheckpoint);
	return setCheckpointForceDirection_result;
}