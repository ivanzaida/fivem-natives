import { ScaleformIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:REQUEST_SCALEFORM_MOVIE_WITH_IGNORE_SUPER_WIDESCREEN
 *
 * 0xEDB29E4B0AB3D876

 * 
 * Requests that a scaleform movie is streamed in (only allows 1 instance of a movie active at one time)
 * 
 * Another REQUEST_SCALEFORM_MOVIE equivalent.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} filename
 * @returns {ScaleformIndex}  
 */
export function requestScaleformMovieWithIgnoreSuperWidescreen(filename: string): ScaleformIndex {
	const requestScaleformMovieWithIgnoreSuperWidescreen_result = Citizen.invokeNative<ScaleformIndex>('0xEDB29E4B0AB3D876', filename);
	return requestScaleformMovieWithIgnoreSuperWidescreen_result;
}