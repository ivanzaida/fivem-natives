import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_GO_STRAIGHT_TO_COORD
 *
 * 0x63C8DCBEC1CF8225

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {number} moveBlendRatio
 * @param {number} time BeforeTeleport is chosen to be 1 the ped will never warp.
 * @param {number} finalHeading
 * @param {number} targetRadius
 */
export function taskGoStraightToCoord(ped: PedIndex, coorsX: number, coorsY: number, coorsZ: number, moveBlendRatio: number, time: number = 20000, finalHeading: number = 40000, targetRadius: number = 0.5): void {
	const taskGoStraightToCoord_result = Citizen.invokeNative<void>('0x63C8DCBEC1CF8225', ped, coorsX, coorsY, coorsZ, moveBlendRatio, time, finalHeading, targetRadius);
	return taskGoStraightToCoord_result;
}