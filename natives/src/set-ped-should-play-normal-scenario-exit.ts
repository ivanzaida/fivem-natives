import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_SHOULD_PLAY_NORMAL_SCENARIO_EXIT
 *
 * 0xAB51C8960A87DF53

 * 
 * When this ped receives its next script task, they will exit from their scenario using the normal scenario exit.
 * Exiting the scenario may take several frames while the ped is playing the exit animation.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function setPedShouldPlayNormalScenarioExit(ped: PedIndex): void {
	const setPedShouldPlayNormalScenarioExit_result = Citizen.invokeNative<void>('0xAB51C8960A87DF53', ped);
	return setPedShouldPlayNormalScenarioExit_result;
}