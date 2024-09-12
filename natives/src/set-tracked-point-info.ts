/**
 * GRAPHICS:SET_TRACKED_POINT_INFO
 *
 * 0x9C0020A372AF7F16

 * 
 * ------------------------------------------------------------------
 * @param {number} queryIdx
 * @param {number} centerX
 * @param {number} centerY
 * @param {number} centerZ
 * @param {number} radius
 */
export function setTrackedPointInfo(queryIdx: number, centerX: number, centerY: number, centerZ: number, radius: number): void {
	const setTrackedPointInfo_result = Citizen.invokeNative<void>('0x9C0020A372AF7F16', queryIdx, centerX, centerY, centerZ, radius);
	return setTrackedPointInfo_result;
}