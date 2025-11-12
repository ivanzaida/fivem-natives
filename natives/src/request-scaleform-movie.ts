import { ScaleformIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:REQUEST_SCALEFORM_MOVIE
 *
 * 0x8DE4F68A9728925E

 * 
 * Requests that a scaleform movie is streamed in (only allows 1 instance of a movie active at one time)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} filename
 * @returns {ScaleformIndex}  
 */
export function requestScaleformMovie(filename: string): ScaleformIndex {
	const requestScaleformMovie_result = Citizen.invokeNative<ScaleformIndex>('0x8DE4F68A9728925E', filename);
	return requestScaleformMovie_result;
}