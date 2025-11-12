/**
 * PATHFIND:GET_APPROX_FLOOR_FOR_POINT
 *
 * 0xFAF53F2F65D5EE26

 * 
 * Returns CGameWorldHeightMap's minimum Z value at specified point (grid node).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} x
 * @param {number} y
 * @returns {number}  
 */
export function getApproxFloorForPoint(x: number, y: number): number {
	const getApproxFloorForPoint_result = Citizen.invokeNative<number>('0xFAF53F2F65D5EE26', x, y);
	return getApproxFloorForPoint_result;
}