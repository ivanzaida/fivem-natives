import { CheckpointIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:SET_CHECKPOINT_INSIDE_CYLINDER_SCALE
 *
 * 0xE0B16D14D440A7C9

 * 
 * ------------------------------------------------------------------
 * @param {CheckpointIndex} uniqueCheckpoint
 * @param {number} insideCylinderScale
 */
export function setCheckpointInsideCylinderScale(uniqueCheckpoint: CheckpointIndex, insideCylinderScale: number): void {
	const setCheckpointInsideCylinderScale_result = Citizen.invokeNative<void>('0xE0B16D14D440A7C9', uniqueCheckpoint, insideCylinderScale);
	return setCheckpointInsideCylinderScale_result;
}