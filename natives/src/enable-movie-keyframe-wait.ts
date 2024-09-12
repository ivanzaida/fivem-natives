/**
 * GRAPHICS:ENABLE_MOVIE_KEYFRAME_WAIT
 *
 * 0x24D021DE46A198D2

 * 
 * ------------------------------------------------------------------
 * @param {boolean} onOff
 */
export function enableMovieKeyframeWait(onOff: boolean): void {
	const enableMovieKeyframeWait_result = Citizen.invokeNative<void>('0x24D021DE46A198D2', onOff);
	return enableMovieKeyframeWait_result;
}