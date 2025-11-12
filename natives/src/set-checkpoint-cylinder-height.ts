import { CheckpointIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:SET_CHECKPOINT_CYLINDER_HEIGHT
 *
 * 0xA7DD2E2BCBD9C8D5

 * 
 * Sets the cylinder height of the checkpoint.
 * 
 * Parameters:
 *  nearHeight - The height of the checkpoint when inside of the radius.
 *  farHeight - The height of the checkpoint when outside of the radius.
 *  radius - The radius of the checkpoint.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CheckpointIndex} uniqueCheckpoint
 * @param {number} cylinderHeightMin
 * @param {number} cylinderHeightMax
 * @param {number} cylinderHeightDist
 */
export function setCheckpointCylinderHeight(uniqueCheckpoint: CheckpointIndex, cylinderHeightMin: number, cylinderHeightMax: number, cylinderHeightDist: number): void {
	const setCheckpointCylinderHeight_result = Citizen.invokeNative<void>('0xA7DD2E2BCBD9C8D5', uniqueCheckpoint, cylinderHeightMin, cylinderHeightMax, cylinderHeightDist);
	return setCheckpointCylinderHeight_result;
}