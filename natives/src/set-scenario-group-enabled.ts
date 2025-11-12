/**
 * TASK:SET_SCENARIO_GROUP_ENABLED
 *
 * 0x7DA9B8DF3A97D040

 * 
 * Full list of scenario groups used in scripts by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/scenarioGroupNames.json
 * Occurrences in the b617d scripts: https://pastebin.com/Tvg2PRHU
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} scenarioGroupName
 * @param {boolean} enabled
 */
export function setScenarioGroupEnabled(scenarioGroupName: string, enabled: boolean): void {
	const setScenarioGroupEnabled_result = Citizen.invokeNative<void>('0x7DA9B8DF3A97D040', scenarioGroupName, enabled);
	return setScenarioGroupEnabled_result;
}