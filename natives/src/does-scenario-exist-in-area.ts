/**
 * TASK:DOES_SCENARIO_EXIST_IN_AREA
 *
 * 0x81E5E9AE1379B068

 * 
 * ------------------------------------------------------------------
 * @param {number} positionX
 * @param {number} positionY
 * @param {number} positionZ
 * @param {number} range
 * @param {boolean} mustBeFree
 * @returns {boolean}  
 */
export function doesScenarioExistInArea(positionX: number, positionY: number, positionZ: number, range: number, mustBeFree: boolean): boolean {
	const doesScenarioExistInArea_result = Citizen.invokeNative<boolean>('0x81E5E9AE1379B068', positionX, positionY, positionZ, range, mustBeFree);
	return doesScenarioExistInArea_result;
}