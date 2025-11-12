import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_SHOULD_PLAY_IMMEDIATE_SCENARIO_EXIT
 *
 * 0x895CE77855F9AFD2

 * 
 * When this ped receives its next script task, they will immediately blend out of their scenario.
 * They will quit their scenario task immediately.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function setPedShouldPlayImmediateScenarioExit(ped: PedIndex): void {
	const setPedShouldPlayImmediateScenarioExit_result = Citizen.invokeNative<void>('0x895CE77855F9AFD2', ped);
	return setPedShouldPlayImmediateScenarioExit_result;
}