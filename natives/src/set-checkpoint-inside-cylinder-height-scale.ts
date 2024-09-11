import { CheckpointIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:SET_CHECKPOINT_INSIDE_CYLINDER_HEIGHT_SCALE
 *
 * 0xF7A330D622F9A04F

 * 
 * ------------------------------------------------------------------
 * @param {CheckpointIndex} uniqueCheckpoint
 * @param {number} insideCylinderHeightScale
 */
export function setCheckpointInsideCylinderHeightScale(uniqueCheckpoint: CheckpointIndex, insideCylinderHeightScale: number): void {
	const setCheckpointInsideCylinderHeightScale_result = Citizen.invokeNative<void>('0xF7A330D622F9A04F', uniqueCheckpoint, insideCylinderHeightScale);
	return setCheckpointInsideCylinderHeightScale_result;
}