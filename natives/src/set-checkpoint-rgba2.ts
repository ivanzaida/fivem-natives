import { CheckpointIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:SET_CHECKPOINT_RGBA2
 *
 * 0xF7408C8F340BA88B

 * 
 * Sets the checkpoint icon color.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CheckpointIndex} uniqueCheckpoint
 * @param {number} colR
 * @param {number} colG
 * @param {number} colB
 * @param {number} colA
 */
export function setCheckpointRgba2(uniqueCheckpoint: CheckpointIndex, colR: number, colG: number, colB: number, colA: number): void {
	const setCheckpointRgba2_result = Citizen.invokeNative<void>('0xF7408C8F340BA88B', uniqueCheckpoint, colR, colG, colB, colA);
	return setCheckpointRgba2_result;
}