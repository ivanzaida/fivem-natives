/**
 * GRAPHICS:GOLF_TRAIL_SET_TESSELLATION
 *
 * 0x91A1DC814CBBB7AF

 * 
 * ------------------------------------------------------------------
 * @param {number} numControlPoints
 * @param {number} tessellation
 */
export function golfTrailSetTessellation(numControlPoints: number, tessellation: number): void {
	const golfTrailSetTessellation_result = Citizen.invokeNative<void>('0x91A1DC814CBBB7AF', numControlPoints, tessellation);
	return golfTrailSetTessellation_result;
}