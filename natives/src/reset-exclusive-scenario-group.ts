/**
 * TASK:RESET_EXCLUSIVE_SCENARIO_GROUP
 *
 * 0x3966463F3674C7D5

 * 
 * Undo the effects of any previous use of SET_EXCLUSIVE_SCENARIO_GROUP. The enabled/disabled
 * state of individual groups is unaffected.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function resetExclusiveScenarioGroup(): void {
	const resetExclusiveScenarioGroup_result = Citizen.invokeNative<void>('0x3966463F3674C7D5', );
	return resetExclusiveScenarioGroup_result;
}