import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_SHOULD_IGNORE_SCENARIO_NAV_CHECKS
 *
 * 0x92298AA9DE8C4A55

 * 
 * When this ped needs to leave their scenario, set if they should test for valid navmesh when they leave.
 * This will prevent them from getting stuck in their point.  Use with care!
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} ignoreChecks
 */
export function setPedShouldIgnoreScenarioNavChecks(ped: PedIndex, ignoreChecks: boolean): void {
	const setPedShouldIgnoreScenarioNavChecks_result = Citizen.invokeNative<void>('0x92298AA9DE8C4A55', ped, ignoreChecks);
	return setPedShouldIgnoreScenarioNavChecks_result;
}