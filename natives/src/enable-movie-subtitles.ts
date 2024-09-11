/**
 * GRAPHICS:ENABLE_MOVIE_SUBTITLES
 *
 * 0x85B701372CB0390F

 * 
 * ------------------------------------------------------------------
 * @param {boolean} onOff
 */
export function enableMovieSubtitles(onOff: boolean): void {
	const enableMovieSubtitles_result = Citizen.invokeNative<void>('0x85B701372CB0390F', onOff);
	return enableMovieSubtitles_result;
}