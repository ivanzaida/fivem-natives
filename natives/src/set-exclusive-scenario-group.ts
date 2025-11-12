/**
 * TASK:SET_EXCLUSIVE_SCENARIO_GROUP
 *
 * 0xDD0315A8F8B31039

 * 
 * Specify a particular group that should be the only scenario group that should be enabled
 * (scenarios that are not in any group will also be considered disabled). There can only be one
 * of these, using the command again will replace any previously set exclusive group. Note that
 * this command does not change the regular enabled/disabled state of the group, so you may
 * also need to enable your group with SET_SCENARIO_GROUP_ENABLED in order for it to work.
 * This now works like a reset flag and must be continually set every frame the scenario group ought
 * to be exlusive!
 * 
 * Full list of scenario groups used in scripts by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/scenarioGroupNames.json
 * Groups found in the scripts used with this native:
 * 
 * "AMMUNATION",
 * "QUARRY",
 * "Triathlon_1",
 * "Triathlon_2",
 * "Triathlon_3"
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} scenarioGroupName
 */
export function setExclusiveScenarioGroup(scenarioGroupName: string): void {
	const setExclusiveScenarioGroup_result = Citizen.invokeNative<void>('0xDD0315A8F8B31039', scenarioGroupName);
	return setExclusiveScenarioGroup_result;
}