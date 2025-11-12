/**
 * TASK:RESET_SCENARIO_GROUPS_ENABLED
 *
 * 0xDFBE573FB949C828

 * 
 * Resets all scenario groups to their default enabled/disabled state (as specified in metadata).
 * This also does what RESET_EXCLUSIVE_SCENARIO_GROUP() does, undoing the effects of SET_EXCLUSIVE_SCENARIO_GROUP.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function resetScenarioGroupsEnabled(): void {
	const resetScenarioGroupsEnabled_result = Citizen.invokeNative<void>('0xDFBE573FB949C828', );
	return resetScenarioGroupsEnabled_result;
}