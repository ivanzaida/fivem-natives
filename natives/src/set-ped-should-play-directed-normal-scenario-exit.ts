import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_SHOULD_PLAY_DIRECTED_NORMAL_SCENARIO_EXIT
 *
 * 0xFFB6CB69ACC75D8D

 * 
 * When this ped receives its next script task, they will exit from their scenario using the normal scenario exit.
 * Exiting the scenario may take several frames while the ped is playing the exit animation.  Returns true if the position was successfully set.
 * If the ped is not currently using a scenario at the time of the command or 0,0,0 is specified as the reaction position,
 * then the ped will by default attempt to direct their exit forwards.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} reactPositionX
 * @param {number} reactPositionY
 * @param {number} reactPositionZ
 * @returns {boolean}  
 */
export function setPedShouldPlayDirectedNormalScenarioExit(ped: PedIndex, reactPositionX: number, reactPositionY: number, reactPositionZ: number): boolean {
	const setPedShouldPlayDirectedNormalScenarioExit_result = Citizen.invokeNative<boolean>('0xFFB6CB69ACC75D8D', ped, reactPositionX, reactPositionY, reactPositionZ);
	return setPedShouldPlayDirectedNormalScenarioExit_result;
}