import { ScaleformIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:IS_ACTIVE_SCALEFORM_MOVIE_DELETING
 *
 * 0xA19744810BB29B74

 * 
 * val is 1-20 (0 will return false)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ScaleformIndex} scaleformMovieId
 * @returns {boolean}  
 */
export function isActiveScaleformMovieDeleting(scaleformMovieId: ScaleformIndex): boolean {
	const isActiveScaleformMovieDeleting_result = Citizen.invokeNative<boolean>('0xA19744810BB29B74', scaleformMovieId);
	return isActiveScaleformMovieDeleting_result;
}