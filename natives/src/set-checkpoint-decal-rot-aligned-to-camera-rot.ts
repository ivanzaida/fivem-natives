import { CheckpointIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:SET_CHECKPOINT_DECAL_ROT_ALIGNED_TO_CAMERA_ROT
 *
 * 0x6F331FADCE88574B

 * 
 * Unknown. Called after creating a checkpoint (type: 51) in the creators.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CheckpointIndex} uniqueCheckpoint
 */
export function setCheckpointDecalRotAlignedToCameraRot(uniqueCheckpoint: CheckpointIndex): void {
	const setCheckpointDecalRotAlignedToCameraRot_result = Citizen.invokeNative<void>('0x6F331FADCE88574B', uniqueCheckpoint);
	return setCheckpointDecalRotAlignedToCameraRot_result;
}