import { CheckpointIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:SET_CHECKPOINT_DIRECTION
 *
 * 0xA3ADA3BEDDCBD88B

 * 
 * ------------------------------------------------------------------
 * @param {CheckpointIndex} uniqueCheckpoint
 * @param {number} scrVecPointAtX
 * @param {number} scrVecPointAtY
 * @param {number} scrVecPointAtZ
 */
export function setCheckpointDirection(uniqueCheckpoint: CheckpointIndex, scrVecPointAtX: number, scrVecPointAtY: number, scrVecPointAtZ: number): void {
	const setCheckpointDirection_result = Citizen.invokeNative<void>('0xA3ADA3BEDDCBD88B', uniqueCheckpoint, scrVecPointAtX, scrVecPointAtY, scrVecPointAtZ);
	return setCheckpointDirection_result;
}