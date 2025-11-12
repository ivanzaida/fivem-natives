import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_USE_NEAREST_SCENARIO_CHAIN_TO_COORD_WARP
 *
 * 0x449C7EE823FE407B

 * 
 * Make sure the scenario point or objects its attached to is loaded at the time.
 * 
 * p5 is always -1 or 0 in scripts
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
export function taskUseNearestScenarioChainToCoordWarp(ped: PedIndex, positionX: number, positionY: number, positionZ: number, range: number, timeToLeaveMS: number = 0): void {
	const taskUseNearestScenarioChainToCoordWarp_result = Citizen.invokeNative<void>('0x449C7EE823FE407B', ped, positionX, positionY, positionZ, range, timeToLeaveMS);
	return taskUseNearestScenarioChainToCoordWarp_result;
}