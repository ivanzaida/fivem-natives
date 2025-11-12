import { ScaleformIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:IS_SCALEFORM_MOVIE_DELETING
 *
 * 0xF44F8CDAE3ED0ACB

 * 
 * val is 1-20. Return is related to INSTRUCTIONAL_BUTTONS, COLOUR_SWITCHER_02, etc?
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ScaleformIndex} scaleformMovieId
 * @returns {boolean}  
 */
export function isScaleformMovieDeleting(scaleformMovieId: ScaleformIndex): boolean {
	const isScaleformMovieDeleting_result = Citizen.invokeNative<boolean>('0xF44F8CDAE3ED0ACB', scaleformMovieId);
	return isScaleformMovieDeleting_result;
}