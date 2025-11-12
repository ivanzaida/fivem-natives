/**
 * PATHFIND:GET_APPROX_HEIGHT_FOR_POINT
 *
 * 0x54D01A0F98391D5B

 * 
 * Returns CGameWorldHeightMap's maximum Z value at specified point (grid node).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} x
 * @param {number} y
 * @returns {number}  
 */
export function getApproxHeightForPoint(x: number, y: number): number {
	const getApproxHeightForPoint_result = Citizen.invokeNative<number>('0x54D01A0F98391D5B', x, y);
	return getApproxHeightForPoint_result;
}