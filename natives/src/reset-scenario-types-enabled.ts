/**
 * TASK:RESET_SCENARIO_TYPES_ENABLED
 *
 * 0xED8A3DF1DC96764E

 * 
 * Reset all scenario types affected by SET_SCENARIO_TYPE_ENABLED,
 * to the default state (typically enabled).
 * 
 * 
 * ------------------------------------------------------------------
 */
export function resetScenarioTypesEnabled(): void {
	const resetScenarioTypesEnabled_result = Citizen.invokeNative<void>('0xED8A3DF1DC96764E', );
	return resetScenarioTypesEnabled_result;
}