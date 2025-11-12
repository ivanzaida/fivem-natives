/**
 * PATHFIND:GET_APPROX_HEIGHT_FOR_AREA
 *
 * 0x2093CB9E0E9B985F

 * 
 * Returns CGameWorldHeightMap's maximum Z among all grid nodes that intersect with the specified rectangle.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} x0
 * @param {number} y0
 * @param {number} x1
 * @param {number} y1
 * @returns {number}  
 */
export function getApproxHeightForArea(x0: number, y0: number, x1: number, y1: number): number {
	const getApproxHeightForArea_result = Citizen.invokeNative<number>('0x2093CB9E0E9B985F', x0, y0, x1, y1);
	return getApproxHeightForArea_result;
}