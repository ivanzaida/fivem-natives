/**
 * GRAPHICS:IS_TRACKED_POINT_VISIBLE
 *
 * 0x8018AA59F97FA9E3

 * 
 * ------------------------------------------------------------------
 * @param {number} queryIdx
 * @returns {boolean}  
 */
export function isTrackedPointVisible(queryIdx: number): boolean {
	const isTrackedPointVisible_result = Citizen.invokeNative<boolean>('0x8018AA59F97FA9E3', queryIdx);
	return isTrackedPointVisible_result;
}