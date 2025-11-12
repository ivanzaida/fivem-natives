/**
 * PATHFIND:GET_APPROX_FLOOR_FOR_AREA
 *
 * 0x05DB7284C236A9DE

 * 
 * Returns CGameWorldHeightMap's minimum Z among all grid nodes that intersect with the specified rectangle.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} x0
 * @param {number} y0
 * @param {number} x1
 * @param {number} y1
 * @returns {number}  
 */
export function getApproxFloorForArea(x0: number, y0: number, x1: number, y1: number): number {
	const getApproxFloorForArea_result = Citizen.invokeNative<number>('0x05DB7284C236A9DE', x0, y0, x1, y1);
	return getApproxFloorForArea_result;
}