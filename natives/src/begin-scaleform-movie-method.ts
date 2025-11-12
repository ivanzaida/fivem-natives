import { ScaleformIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:BEGIN_SCALEFORM_MOVIE_METHOD
 *
 * 0x88F483FBD433696A

 * 
 * start of an actionscript method called on a scaleform movie
 * 
 * Push a function from the Scaleform onto the stack
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ScaleformIndex} scaleformMovieId
 * @param {string} methodName
 * @returns {boolean}  
 */
export function beginScaleformMovieMethod(scaleformMovieId: ScaleformIndex, methodName: string): boolean {
	const beginScaleformMovieMethod_result = Citizen.invokeNative<boolean>('0x88F483FBD433696A', scaleformMovieId, methodName);
	return beginScaleformMovieMethod_result;
}