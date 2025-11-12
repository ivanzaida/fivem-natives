import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_SHOULD_PLAY_FLEE_SCENARIO_EXIT
 *
 * 0x36B2377A209962E5

 * 
 * When this ped receives its next script task, they will do a flee exit from the scenario point.
 * It will take a few frames for the exit to be completed.  Unlike the other force exit commands, the ped must be using the scenario task
 * before this is called.  Returns true if the position was successfully set.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} dangerPositionX
 * @param {number} dangerPositionY
 * @param {number} dangerPositionZ
 * @returns {boolean}  
 */
export function setPedShouldPlayFleeScenarioExit(ped: PedIndex, dangerPositionX: number, dangerPositionY: number, dangerPositionZ: number): boolean {
	const setPedShouldPlayFleeScenarioExit_result = Citizen.invokeNative<boolean>('0x36B2377A209962E5', ped, dangerPositionX, dangerPositionY, dangerPositionZ);
	return setPedShouldPlayFleeScenarioExit_result;
}