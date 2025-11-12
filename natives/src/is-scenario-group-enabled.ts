/**
 * TASK:IS_SCENARIO_GROUP_ENABLED
 *
 * 0x03F4074C23C3682E

 * 
 * Returns TRUE if the group is enabled.
 * 
 * Full list of scenario groups used in scripts by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/scenarioGroupNames.json
 * Occurrences in the b617d scripts:
 * 
 *  "ARMY_GUARD",
 *  "ARMY_HELI",
 *  "BLIMP",
 *  "Cinema_Downtown",
 *  "Cinema_Morningwood",
 *  "Cinema_Textile",
 *  "City_Banks",
 *  "Countryside_Banks",
 *  "DEALERSHIP",
 *  "KORTZ_SECURITY",
 *  "LSA_Planes",
 *  "MP_POLICE",
 *  "Observatory_Bikers",
 *  "POLICE_POUND1",
 *  "POLICE_POUND2",
 *  "POLICE_POUND3",
 *  "POLICE_POUND4",
 *  "POLICE_POUND5",
 *  "Rampage1",
 *  "SANDY_PLANES",
 *  "SCRAP_SECURITY",
 *  "SEW_MACHINE",
 *  "SOLOMON_GATE"
 * 
 * Sometimes used with DOES_SCENARIO_GROUP_EXIST:
 * if (TASK::DOES_SCENARIO_GROUP_EXIST("Observatory_Bikers") &&   (!TASK::IS_SCENARIO_GROUP_ENABLED("Observatory_Bikers"))) {
 * else if (TASK::IS_SCENARIO_GROUP_ENABLED("BLIMP")) {
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} scenarioGroupName
 * @returns {boolean}  
 */
export function isScenarioGroupEnabled(scenarioGroupName: string): boolean {
	const isScenarioGroupEnabled_result = Citizen.invokeNative<boolean>('0x03F4074C23C3682E', scenarioGroupName);
	return isScenarioGroupEnabled_result;
}