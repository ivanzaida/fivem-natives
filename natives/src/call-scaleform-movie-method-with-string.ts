import { ScaleformIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:CALL_SCALEFORM_MOVIE_METHOD_WITH_STRING
 *
 * 0x4A536D06AFED1D5B

 * 
 * calls an actionscript method on the passed in movie
 * 
 * Calls the Scaleform function and passes the parameters as strings.
 * 
 * The number of parameters passed to the function varies, so the end of the parameter list is represented by 0 (NULL).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ScaleformIndex} scaleformMovieId
 * @param {string} methodName
 * @param {string} param1
 * @param {string} param2
 * @param {string} param3
 * @param {string} param4
 * @param {string} param5
 */
export function callScaleformMovieMethodWithString(scaleformMovieId: ScaleformIndex, methodName: string, param1: string, param2: string = null!, param3: string = null!, param4: string = null!, param5: string = null!): void {
	const callScaleformMovieMethodWithString_result = Citizen.invokeNative<void>('0x4A536D06AFED1D5B', scaleformMovieId, methodName, param1, param2, param3, param4, param5);
	return callScaleformMovieMethodWithString_result;
}