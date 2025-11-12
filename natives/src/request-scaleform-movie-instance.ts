import { ScaleformIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:REQUEST_SCALEFORM_MOVIE_INSTANCE
 *
 * 0x5AF05959A6F22BB4

 * 
 * Requests that a scaleform movie is streamed in - allows multiple copies of movies
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} filename
 * @returns {ScaleformIndex}  
 */
export function requestScaleformMovieInstance(filename: string): ScaleformIndex {
	const requestScaleformMovieInstance_result = Citizen.invokeNative<ScaleformIndex>('0x5AF05959A6F22BB4', filename);
	return requestScaleformMovieInstance_result;
}