/**
 * TASK:DOES_SCRIPTED_COVER_POINT_EXIST_AT_COORDS
 *
 * 0xB4AC30A54094D002

 * 
 * Checks if there is a cover point at position
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @returns {boolean}  
 */
export function doesScriptedCoverPointExistAtCoords(coorsX: number, coorsY: number, coorsZ: number): boolean {
	const doesScriptedCoverPointExistAtCoords_result = Citizen.invokeNative<boolean>('0xB4AC30A54094D002', coorsX, coorsY, coorsZ);
	return doesScriptedCoverPointExistAtCoords_result;
}