/**
 * GRAPHICS:DESTROY_TRACKED_POINT
 *
 * 0x4FD2A45FD634CE58

 * 
 * ------------------------------------------------------------------
 * @param {number} queryIdx
 */
export function destroyTrackedPoint(queryIdx: number): void {
	const destroyTrackedPoint_result = Citizen.invokeNative<void>('0x4FD2A45FD634CE58', queryIdx);
	return destroyTrackedPoint_result;
}