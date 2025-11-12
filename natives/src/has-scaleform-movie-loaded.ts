import { ScaleformIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:HAS_SCALEFORM_MOVIE_LOADED
 *
 * 0xA0C7B98BCF1EEF9E

 * 
 * to check if a movie has streamed in yet
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ScaleformIndex} scaleformMovieId
 * @returns {boolean}  
 */
export function hasScaleformMovieLoaded(scaleformMovieId: ScaleformIndex): boolean {
	const hasScaleformMovieLoaded_result = Citizen.invokeNative<boolean>('0xA0C7B98BCF1EEF9E', scaleformMovieId);
	return hasScaleformMovieLoaded_result;
}