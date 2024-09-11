/**
 * PED:DOES_SCENARIO_BLOCKING_AREA_EXISTS
 *
 * 0xCFE9A25C2271CFBF

 * 
 * ------------------------------------------------------------------
 * @param {number} minX
 * @param {number} minY
 * @param {number} minZ
 * @param {number} maxX
 * @param {number} maxY
 * @param {number} maxZ
 * @returns {boolean}  
 */
export function doesScenarioBlockingAreaExists(minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number): boolean {
	const doesScenarioBlockingAreaExists_result = Citizen.invokeNative<boolean>('0xCFE9A25C2271CFBF', minX, minY, minZ, maxX, maxY, maxZ);
	return doesScenarioBlockingAreaExists_result;
}