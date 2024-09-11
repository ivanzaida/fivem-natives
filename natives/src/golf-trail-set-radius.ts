/**
 * GRAPHICS:GOLF_TRAIL_SET_RADIUS
 *
 * 0xFB8F1D6097145CC6

 * 
 * ------------------------------------------------------------------
 * @param {number} radiusStart
 * @param {number} radiusMiddle
 * @param {number} radiusEnd
 */
export function golfTrailSetRadius(radiusStart: number, radiusMiddle: number, radiusEnd: number): void {
	const golfTrailSetRadius_result = Citizen.invokeNative<void>('0xFB8F1D6097145CC6', radiusStart, radiusMiddle, radiusEnd);
	return golfTrailSetRadius_result;
}