import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_USE_NEAREST_SCENARIO_CHAIN_TO_COORD
 *
 * 0xB50A89E4C8C2A37C

 * 
 * Make sure the scenario point or objects its attached to is loaded at the time.
 * 
 * p5 is always 0 in scripts
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
export function taskUseNearestScenarioChainToCoord(ped: PedIndex, positionX: number, positionY: number, positionZ: number, range: number, timeToLeaveMS: number = 0): void {
	const taskUseNearestScenarioChainToCoord_result = Citizen.invokeNative<void>('0xB50A89E4C8C2A37C', ped, positionX, positionY, positionZ, range, timeToLeaveMS);
	return taskUseNearestScenarioChainToCoord_result;
}