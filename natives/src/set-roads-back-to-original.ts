/**
 * PATHFIND:SET_ROADS_BACK_TO_ORIGINAL
 *
 * 0x33B6B083EA6305A5

 * 
 * It is not cool to call a SET_ROADS_IN_AREA(true)  to undo a SET_ROADS_IN_AREA(false) because the nodes that were originally off would now be on.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} coorsMinX
 * @param {number} coorsMinY
 * @param {number} coorsMinZ
 * @param {number} coorsMaxX
 * @param {number} coorsMaxY
 * @param {number} coorsMaxZ
 * @param {boolean} network
 */
export function setRoadsBackToOriginal(coorsMinX: number, coorsMinY: number, coorsMinZ: number, coorsMaxX: number, coorsMaxY: number, coorsMaxZ: number, network: boolean = true): void {
	const setRoadsBackToOriginal_result = Citizen.invokeNative<void>('0x33B6B083EA6305A5', coorsMinX, coorsMinY, coorsMinZ, coorsMaxX, coorsMaxY, coorsMaxZ, network);
	return setRoadsBackToOriginal_result;
}