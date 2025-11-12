/**
 * MISC:GET_RATIO_OF_CLOSEST_POINT_ON_LINE
 *
 * 0xA2DD309FA5FD1435

 * 
 * returns a float between 0.0 and 1.0, clamp: sets whether the product should be clamped between the given coordinates
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} rPointToTestX
 * @param {number} rPointToTestY
 * @param {number} rPointToTestZ
 * @param {number} startX
 * @param {number} startY
 * @param {number} startZ
 * @param {number} endX
 * @param {number} endY
 * @param {number} endZ
 * @param {boolean} clampToLine
 * @returns {number}  
 */
export function getRatioOfClosestPointOnLine(rPointToTestX: number, rPointToTestY: number, rPointToTestZ: number, startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, clampToLine: boolean = true): number {
	const getRatioOfClosestPointOnLine_result = Citizen.invokeNative<number>('0xA2DD309FA5FD1435', rPointToTestX, rPointToTestY, rPointToTestZ, startX, startY, startZ, endX, endY, endZ, clampToLine);
	return getRatioOfClosestPointOnLine_result;
}