/**
 * OBJECT:IS_POINT_IN_ANGLED_AREA
 *
 * 0x26715B0ED6702C87

 * 
 * An angled area is an X-Z oriented rectangle with three parameters:
 * 1. origin: the mid-point along a base edge of the rectangle;
 * 2. extent: the mid-point of opposite base edge on the other Z;
 * 3. width: the length of the base edge; (named derived from logging strings ``CNetworkRoadNodeWorldStateData``).
 * 
 * The oriented rectangle can then be derived from the direction of the two points (``norm(origin - extent)``), its orthonormal, and the width, e.g:
 * 1. golf_mp https://i.imgur.com/JhsQAK9.png
 * 2. am_taxi https://i.imgur.com/TJWCZaT.jpg
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} pointX
 * @param {number} pointY
 * @param {number} pointZ
 * @param {number} coors1X
 * @param {number} coors1Y
 * @param {number} coors1Z
 * @param {number} coors2X
 * @param {number} coors2Y
 * @param {number} coors2Z
 * @param {number} distanceP1toP4
 * @param {boolean} highlightArea
 * @param {boolean} check3D
 * @returns {boolean}  
 */
export function isPointInAngledArea(pointX: number, pointY: number, pointZ: number, coors1X: number, coors1Y: number, coors1Z: number, coors2X: number, coors2Y: number, coors2Z: number, distanceP1toP4: number, highlightArea: boolean = false, check3D: boolean = true): boolean {
	const isPointInAngledArea_result = Citizen.invokeNative<boolean>('0x26715B0ED6702C87', pointX, pointY, pointZ, coors1X, coors1Y, coors1Z, coors2X, coors2Y, coors2Z, distanceP1toP4, highlightArea, check3D);
	return isPointInAngledArea_result;
}