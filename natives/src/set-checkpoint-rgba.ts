import { CheckpointIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:SET_CHECKPOINT_RGBA
 *
 * 0xEDC9B904B870CE80

 * 
 * Sets the checkpoint color.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CheckpointIndex} uniqueCheckpoint
 * @param {number} colR
 * @param {number} colG
 * @param {number} colB
 * @param {number} colA
 */
export function setCheckpointRgba(uniqueCheckpoint: CheckpointIndex, colR: number, colG: number, colB: number, colA: number): void {
	const setCheckpointRgba_result = Citizen.invokeNative<void>('0xEDC9B904B870CE80', uniqueCheckpoint, colR, colG, colB, colA);
	return setCheckpointRgba_result;
}