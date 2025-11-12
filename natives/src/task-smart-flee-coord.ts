import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_SMART_FLEE_COORD
 *
 * 0xFD251F92B546F389

 * 
 * Makes the specified ped flee the specified distance from the specified position.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {number} safeDistance
 * @param {number} fleeTime
 * @param {boolean} preferPavements
 * @param {boolean} quitIfOutOfRange
 */
export function taskSmartFleeCoord(ped: PedIndex, coorsX: number, coorsY: number, coorsZ: number, safeDistance: number, fleeTime: number, preferPavements: boolean = false, quitIfOutOfRange: boolean = false): void {
	const taskSmartFleeCoord_result = Citizen.invokeNative<void>('0xFD251F92B546F389', ped, coorsX, coorsY, coorsZ, safeDistance, fleeTime, preferPavements, quitIfOutOfRange);
	return taskSmartFleeCoord_result;
}