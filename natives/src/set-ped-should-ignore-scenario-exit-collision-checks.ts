import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_SHOULD_IGNORE_SCENARIO_EXIT_COLLISION_CHECKS
 *
 * 0x77837D91524AF89C

 * 
 * When this ped needs to leave their scenario, set if they test for collision against the world when they leave.
 * This will prevent them from getting stuck in their point because there was nearby collision.  Use with care!
 * This command will also ignore the navmesh checks.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} ignoreChecks
 */
export function setPedShouldIgnoreScenarioExitCollisionChecks(ped: PedIndex, ignoreChecks: boolean): void {
	const setPedShouldIgnoreScenarioExitCollisionChecks_result = Citizen.invokeNative<void>('0x77837D91524AF89C', ped, ignoreChecks);
	return setPedShouldIgnoreScenarioExitCollisionChecks_result;
}