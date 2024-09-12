import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_PED_SLIDE_TO_COORD
 *
 * 0x807D24321098A1C7

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {number} headingDegrees
 * @param {number} speed In ms/s will be clamped between 0.1  1.0, reccomended value is the default
 */
export function taskPedSlideToCoord(ped: PedIndex, coorsX: number, coorsY: number, coorsZ: number, headingDegrees: number, speed: number = 0.75): void {
	const taskPedSlideToCoord_result = Citizen.invokeNative<void>('0x807D24321098A1C7', ped, coorsX, coorsY, coorsZ, headingDegrees, speed);
	return taskPedSlideToCoord_result;
}