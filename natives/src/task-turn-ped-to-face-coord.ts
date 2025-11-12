import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_TURN_PED_TO_FACE_COORD
 *
 * 0xCD76801E1106CABE

 * 
 * duration in milliseconds
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {number} time
 */
export function taskTurnPedToFaceCoord(ped: PedIndex, coorsX: number, coorsY: number, coorsZ: number, time: number = 0): void {
	const taskTurnPedToFaceCoord_result = Citizen.invokeNative<void>('0xCD76801E1106CABE', ped, coorsX, coorsY, coorsZ, time);
	return taskTurnPedToFaceCoord_result;
}