import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_WANDER_IN_AREA
 *
 * 0xE092C8C5A5EA5F57

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} centerX
 * @param {number} centerY
 * @param {number} centerZ
 * @param {number} radius
 * @param {number} minWaitTime
 * @param {number} maxWaitTime
 */
export function taskWanderInArea(ped: PedIndex, centerX: number, centerY: number, centerZ: number, radius: number, minWaitTime: number = 3, maxWaitTime: number = 6): void {
	const taskWanderInArea_result = Citizen.invokeNative<void>('0xE092C8C5A5EA5F57', ped, centerX, centerY, centerZ, radius, minWaitTime, maxWaitTime);
	return taskWanderInArea_result;
}