/**
 * MISC:CLEAR_SCENARIO_SPAWN_HISTORY
 *
 * 0xE0443EB1DC8A2F79

 * 
 * PARAM NOTES
 * 
 * Possibly used to clear scenario points.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function clearScenarioSpawnHistory(): void {
	const clearScenarioSpawnHistory_result = Citizen.invokeNative<void>('0xE0443EB1DC8A2F79', );
	return clearScenarioSpawnHistory_result;
}