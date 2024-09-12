import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:TASK_GO_STRAIGHT_TO_COORD
 *
 * 0x80A9E7A7

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The ped handle.
 * @param {number} x The x coordinate.
 * @param {number} y The y coordinate.
 * @param {number} z The z coordinate.
 * @param {number} speed The ped movement speed.
 * @param {number} timeout \1 , other values appear to break the ped movement.
 * @param {number} targetHeading The heading you want the ped to be on x,y,z coord.
 * @param {number} distanceToSlide The distance from x,y,z where the ped will start sliding.
 */
export function taskGoStraightToCoord(ped: PedIndex, x: number, y: number, z: number, speed: number, timeout: number, targetHeading: number, distanceToSlide: number): void {
	const taskGoStraightToCoord_result = Citizen.invokeNative<void>('0x80A9E7A7', ped, x, y, z, speed, timeout, targetHeading, distanceToSlide);
	return taskGoStraightToCoord_result;
}