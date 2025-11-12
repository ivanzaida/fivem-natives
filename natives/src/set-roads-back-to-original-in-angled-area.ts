/**
 * PATHFIND:SET_ROADS_BACK_TO_ORIGINAL_IN_ANGLED_AREA
 *
 * 0x2AF2D6F164BD6F5A

 * 
 * It is not cool to call a SET_ROADS_IN_AREA(true)  to undo a SET_ROADS_IN_AREA(false) because the nodes that were originally off would now be on.
 * 
 * See IS_POINT_IN_ANGLED_AREA for the definition of an angled area.
 * bool p7 - always 1
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} vec1X
 * @param {number} vec1Y
 * @param {number} vec1Z
 * @param {number} vec2X
 * @param {number} vec2Y
 * @param {number} vec2Z
 * @param {number} areaWidth
 * @param {boolean} network
 */
export function setRoadsBackToOriginalInAngledArea(vec1X: number, vec1Y: number, vec1Z: number, vec2X: number, vec2Y: number, vec2Z: number, areaWidth: number, network: boolean = true): void {
	const setRoadsBackToOriginalInAngledArea_result = Citizen.invokeNative<void>('0x2AF2D6F164BD6F5A', vec1X, vec1Y, vec1Z, vec2X, vec2Y, vec2Z, areaWidth, network);
	return setRoadsBackToOriginalInAngledArea_result;
}