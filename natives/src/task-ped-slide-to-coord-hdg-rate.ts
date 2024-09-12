import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_PED_SLIDE_TO_COORD_HDG_RATE
 *
 * 0xDC90C3410FA6A9F1

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {number} headingDegrees
 * @param {number} speed
 * @param {number} headingChangeRate
 */
export function taskPedSlideToCoordHdgRate(ped: PedIndex, coorsX: number, coorsY: number, coorsZ: number, headingDegrees: number, speed: number, headingChangeRate: number): void {
	const taskPedSlideToCoordHdgRate_result = Citizen.invokeNative<void>('0xDC90C3410FA6A9F1', ped, coorsX, coorsY, coorsZ, headingDegrees, speed, headingChangeRate);
	return taskPedSlideToCoordHdgRate_result;
}