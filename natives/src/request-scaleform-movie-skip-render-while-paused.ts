import { ScaleformIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:REQUEST_SCALEFORM_MOVIE_SKIP_RENDER_WHILE_PAUSED
 *
 * 0xED28B9E18E376D5D

 * 
 * Requests that a scaleform movie is streamed in - allows multiple copies of movies
 * Same as REQUEST_SCALEFORM_MOVIE, but movie won't render when the game is paused
 * Requests that a scaleform movie is streamed in - allows multiple copies of movies
 * 
 * Similar to REQUEST_SCALEFORM_MOVIE, but seems to be some kind of "interactive" scaleform movie?
 * 
 * These seem to be the only scaleforms ever requested by this native:
 * "breaking_news"
 * "desktop_pc"
 * "ECG_MONITOR"
 * "Hacking_PC"
 * "TEETH_PULLING"
 * 
 * Note: Unless this hash is out-of-order, this native is next-gen only.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} filename
 * @returns {ScaleformIndex}  
 */
export function requestScaleformMovieSkipRenderWhilePaused(filename: string): ScaleformIndex {
	const requestScaleformMovieSkipRenderWhilePaused_result = Citizen.invokeNative<ScaleformIndex>('0xED28B9E18E376D5D', filename);
	return requestScaleformMovieSkipRenderWhilePaused_result;
}