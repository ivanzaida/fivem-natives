import { Vector3 } from '@ivanzaida/structures'

/**
 * MISC:GET_CLOSEST_POINT_ON_LINE
 *
 * 0xC14F2F615169363F

 * 
 * clamp: sets whether the product should be clamped between the given coordinates
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
 * @returns {Vector3}  
 */
export function getClosestPointOnLine(rPointToTestX: number, rPointToTestY: number, rPointToTestZ: number, startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, clampToLine: boolean = true): Vector3 {
	const getClosestPointOnLine_result = Citizen.invokeNative<Vector3>('0xC14F2F615169363F', rPointToTestX, rPointToTestY, rPointToTestZ, startX, startY, startZ, endX, endY, endZ, clampToLine);
	return getClosestPointOnLine_result;
}