/**
 * PATHFIND:SET_ROADS_IN_ANGLED_AREA
 *
 * 0x5E08BBBF87BC4886

 * 
 * unknown3 is related to `SEND_SCRIPT_WORLD_STATE_EVENT > CNetworkRoadNodeWorldStateData` in networked environments.
 * See IS_POINT_IN_ANGLED_AREA for the definition of an angled area.
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
 * @param {boolean} highlightArea
 * @param {boolean} active
 * @param {boolean} network
 */
export function setRoadsInAngledArea(vec1X: number, vec1Y: number, vec1Z: number, vec2X: number, vec2Y: number, vec2Z: number, areaWidth: number, highlightArea: boolean, active: boolean, network: boolean = true): void {
	const setRoadsInAngledArea_result = Citizen.invokeNative<void>('0x5E08BBBF87BC4886', vec1X, vec1Y, vec1Z, vec2X, vec2Y, vec2Z, areaWidth, highlightArea, active, network);
	return setRoadsInAngledArea_result;
}