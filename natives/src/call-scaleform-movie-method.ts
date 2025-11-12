import { ScaleformIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:CALL_SCALEFORM_MOVIE_METHOD
 *
 * 0xB750FE3C9F094356

 * 
 * calls an actionscript method on the passed in movie
 * 
 * Calls the Scaleform function.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ScaleformIndex} scaleformMovieId
 * @param {string} methodName
 */
export function callScaleformMovieMethod(scaleformMovieId: ScaleformIndex, methodName: string): void {
	const callScaleformMovieMethod_result = Citizen.invokeNative<void>('0xB750FE3C9F094356', scaleformMovieId, methodName);
	return callScaleformMovieMethod_result;
}