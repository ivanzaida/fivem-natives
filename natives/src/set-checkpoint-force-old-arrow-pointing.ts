import { CheckpointIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:SET_CHECKPOINT_FORCE_OLD_ARROW_POINTING
 *
 * 0xA46D09CA7F9EE44B

 * 
 * ------------------------------------------------------------------
 * @param {CheckpointIndex} uniqueCheckpoint
 */
export function setCheckpointForceOldArrowPointing(uniqueCheckpoint: CheckpointIndex): void {
	const setCheckpointForceOldArrowPointing_result = Citizen.invokeNative<void>('0xA46D09CA7F9EE44B', uniqueCheckpoint);
	return setCheckpointForceOldArrowPointing_result;
}