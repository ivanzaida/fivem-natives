/**
 * TASK:IS_SCENARIO_TYPE_ENABLED
 *
 * 0x6964489BB575FE9D

 * 
 * Returns TRUE if the scenario type hasn't been disabled.
 * 
 * Full list of scenario types used in scripts by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/scenariosCompact.json
 * Occurrences in the b617d scripts:
 * "PROP_HUMAN_SEAT_CHAIR",
 * "WORLD_HUMAN_DRINKING",
 * "WORLD_HUMAN_HANG_OUT_STREET",
 * "WORLD_HUMAN_SMOKING",
 * "WORLD_MOUNTAIN_LION_WANDER",
 * "WORLD_HUMAN_DRINKING"
 * 
 * Sometimes used together with MISC::IS_STRING_NULL_OR_EMPTY in the scripts.
 * 
 * scenarioType could be the same as scenarioName, used in for example TASK::TASK_START_SCENARIO_AT_POSITION.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} scenarioTypeName
 * @returns {boolean}  
 */
export function isScenarioTypeEnabled(scenarioTypeName: string): boolean {
	const isScenarioTypeEnabled_result = Citizen.invokeNative<boolean>('0x6964489BB575FE9D', scenarioTypeName);
	return isScenarioTypeEnabled_result;
}