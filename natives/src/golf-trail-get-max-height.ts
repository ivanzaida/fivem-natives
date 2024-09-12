/**
 * GRAPHICS:GOLF_TRAIL_GET_MAX_HEIGHT
 *
 * 0xAE8417FD434CE2AD

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function golfTrailGetMaxHeight(): number {
	const golfTrailGetMaxHeight_result = Citizen.invokeNative<number>('0xAE8417FD434CE2AD', );
	return golfTrailGetMaxHeight_result;
}