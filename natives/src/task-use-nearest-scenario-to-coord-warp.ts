import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_USE_NEAREST_SCENARIO_TO_COORD_WARP
 *
 * 0xCDA51E8BE6E5790A

 * 
 * Make sure the scenario point or objects its attached to is loaded at the time.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} positionX
 * @param {number} positionY
 * @param {number} positionZ
 * @param {number} range
 * @param {number} timeToLeaveMS
 */
export function taskUseNearestScenarioToCoordWarp(ped: PedIndex, positionX: number, positionY: number, positionZ: number, range: number, timeToLeaveMS: number = 0): void {
	const taskUseNearestScenarioToCoordWarp_result = Citizen.invokeNative<void>('0xCDA51E8BE6E5790A', ped, positionX, positionY, positionZ, range, timeToLeaveMS);
	return taskUseNearestScenarioToCoordWarp_result;
}