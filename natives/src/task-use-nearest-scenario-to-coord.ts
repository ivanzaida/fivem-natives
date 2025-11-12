import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_USE_NEAREST_SCENARIO_TO_COORD
 *
 * 0xFC8E18D52935E5EB

 * 
 * Make sure the scenario point or objects its attached to is loaded at the time.
 * 
 * Updated variables
 * 
 * An alternative to TASK::TASK_USE_NEAREST_SCENARIO_TO_COORD_WARP. Makes the ped walk to the scenario instead.
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
export function taskUseNearestScenarioToCoord(ped: PedIndex, positionX: number, positionY: number, positionZ: number, range: number, timeToLeaveMS: number = 0): void {
	const taskUseNearestScenarioToCoord_result = Citizen.invokeNative<void>('0xFC8E18D52935E5EB', ped, positionX, positionY, positionZ, range, timeToLeaveMS);
	return taskUseNearestScenarioToCoord_result;
}