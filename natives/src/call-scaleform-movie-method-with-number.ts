import { ScaleformIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:CALL_SCALEFORM_MOVIE_METHOD_WITH_NUMBER
 *
 * 0xDBCE37B37A697642

 * 
 * calls an actionscript method on the passed in movie
 * 
 * Calls the Scaleform function and passes the parameters as floats.
 * 
 * The number of parameters passed to the function varies, so the end of the parameter list is represented by -1.0.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ScaleformIndex} scaleformMovieId
 * @param {string} methodName
 * @param {number} param1
 * @param {number} param2
 * @param {number} param3
 * @param {number} param4
 * @param {number} param5
 */
export function callScaleformMovieMethodWithNumber(scaleformMovieId: ScaleformIndex, methodName: string, param1: number, param2: number = 1, param3: number = 1, param4: number = 1, param5: number = 1): void {
	const callScaleformMovieMethodWithNumber_result = Citizen.invokeNative<void>('0xDBCE37B37A697642', scaleformMovieId, methodName, param1, param2, param3, param4, param5);
	return callScaleformMovieMethodWithNumber_result;
}