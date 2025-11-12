/**
 * TASK:IS_SCENARIO_OCCUPIED
 *
 * 0x9C8348AB222FEBA3

 * 
 * Returns FALSE if no scenario was even found in this location (use DOES_SCENARIO_EXIST_IN_AREA to check, if needed)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} positionX
 * @param {number} positionY
 * @param {number} positionZ
 * @param {number} range
 * @param {boolean} onlyUsersActuallyAtScenario
 * @returns {boolean}  
 */
export function isScenarioOccupied(positionX: number, positionY: number, positionZ: number, range: number, onlyUsersActuallyAtScenario: boolean): boolean {
	const isScenarioOccupied_result = Citizen.invokeNative<boolean>('0x9C8348AB222FEBA3', positionX, positionY, positionZ, range, onlyUsersActuallyAtScenario);
	return isScenarioOccupied_result;
}