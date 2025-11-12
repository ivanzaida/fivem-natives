/**
 * GRAPHICS:GOLF_TRAIL_SET_PATH
 *
 * 0x79C9D43F3FE4480B

 * 
 * p8 seems to always be false.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} positionStartX
 * @param {number} positionStartY
 * @param {number} positionStartZ
 * @param {number} velocityStartX
 * @param {number} velocityStartY
 * @param {number} velocityStartZ
 * @param {number} velocityScale
 * @param {number} z1
 * @param {boolean} ascending
 */
export function golfTrailSetPath(positionStartX: number, positionStartY: number, positionStartZ: number, velocityStartX: number, velocityStartY: number, velocityStartZ: number, velocityScale: number, z1: number, ascending: boolean): void {
	const golfTrailSetPath_result = Citizen.invokeNative<void>('0x79C9D43F3FE4480B', positionStartX, positionStartY, positionStartZ, velocityStartX, velocityStartY, velocityStartZ, velocityScale, z1, ascending);
	return golfTrailSetPath_result;
}