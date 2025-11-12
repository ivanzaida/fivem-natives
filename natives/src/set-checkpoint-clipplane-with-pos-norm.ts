import { CheckpointIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:SET_CHECKPOINT_CLIPPLANE_WITH_POS_NORM
 *
 * 0xEA8732A7013AB8DC

 * 
 * This does not move an existing checkpoint... so wtf.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CheckpointIndex} uniqueCheckpoint
 * @param {number} scrVecPositionX
 * @param {number} scrVecPositionY
 * @param {number} scrVecPositionZ
 * @param {number} scrVecNormalX
 * @param {number} scrVecNormalY
 * @param {number} scrVecNormalZ
 */
export function setCheckpointClipplaneWithPosNorm(uniqueCheckpoint: CheckpointIndex, scrVecPositionX: number, scrVecPositionY: number, scrVecPositionZ: number, scrVecNormalX: number, scrVecNormalY: number, scrVecNormalZ: number): void {
	const setCheckpointClipplaneWithPosNorm_result = Citizen.invokeNative<void>('0xEA8732A7013AB8DC', uniqueCheckpoint, scrVecPositionX, scrVecPositionY, scrVecPositionZ, scrVecNormalX, scrVecNormalY, scrVecNormalZ);
	return setCheckpointClipplaneWithPosNorm_result;
}