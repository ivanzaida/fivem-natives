import { ScaleformIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:HAS_SCALEFORM_CONTAINER_MOVIE_LOADED_INTO_PARENT
 *
 * 0xD1417F25E6970920

 * 
 * returns TRUE if this movie has got a child and its loaded
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ScaleformIndex} scaleformMovieId
 * @returns {boolean}  
 */
export function hasScaleformContainerMovieLoadedIntoParent(scaleformMovieId: ScaleformIndex): boolean {
	const hasScaleformContainerMovieLoadedIntoParent_result = Citizen.invokeNative<boolean>('0xD1417F25E6970920', scaleformMovieId);
	return hasScaleformContainerMovieLoadedIntoParent_result;
}