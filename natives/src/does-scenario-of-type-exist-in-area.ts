/**
 * TASK:DOES_SCENARIO_OF_TYPE_EXIST_IN_AREA
 *
 * 0x813D79A654EE13DA

 * 
 * ------------------------------------------------------------------
 * @param {number} positionX
 * @param {number} positionY
 * @param {number} positionZ
 * @param {string} scenarioType
 * @param {number} range
 * @param {boolean} mustBeFree
 * @returns {boolean}  
 */
export function doesScenarioOfTypeExistInArea(positionX: number, positionY: number, positionZ: number, scenarioType: string, range: number, mustBeFree: boolean): boolean {
	const doesScenarioOfTypeExistInArea_result = Citizen.invokeNative<boolean>('0x813D79A654EE13DA', positionX, positionY, positionZ, scenarioType, range, mustBeFree);
	return doesScenarioOfTypeExistInArea_result;
}