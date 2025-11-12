import { ScaleformIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:CALL_SCALEFORM_MOVIE_METHOD_WITH_NUMBER_AND_STRING
 *
 * 0x5EA38B125B8B37E5

 * 
 * calls an actionscript method on the passed in movie
 * 
 * Calls the Scaleform function and passes both float and string parameters (in their respective order).
 * 
 * The number of parameters passed to the function varies, so the end of the float parameters is represented by -1.0, and the end of the string parameters is represented by 0 (NULL).
 * 
 * NOTE: The order of parameters in the function prototype is important! All float parameters must come first, followed by the string parameters.
 * 
 * Examples:
 * // function MY_FUNCTION(floatParam1, floatParam2, stringParam)
 * GRAPHICS::CALL_SCALEFORM_MOVIE_METHOD_WITH_NUMBER_AND_STRING(scaleform, "MY_FUNCTION", 10.0, 20.0, -1.0, -1.0, -1.0, "String param", 0, 0, 0, 0);
 * 
 * // function MY_FUNCTION_2(floatParam, stringParam1, stringParam2)
 * GRAPHICS::CALL_SCALEFORM_MOVIE_METHOD_WITH_NUMBER_AND_STRING(scaleform, "MY_FUNCTION_2", 10.0, -1.0, -1.0, -1.0, -1.0, "String param #1", "String param #2", 0, 0, 0);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ScaleformIndex} iScaleformMovieId
 * @param {string} cMethodName
 * @param {number} fParam1
 * @param {number} fParam2
 * @param {number} fParam3
 * @param {number} fParam4
 * @param {number} fParam5
 * @param {string} cParam1
 * @param {string} cParam2
 * @param {string} cParam3
 * @param {string} cParam4
 * @param {string} cParam5
 */
export function callScaleformMovieMethodWithNumberAndString(iScaleformMovieId: ScaleformIndex, cMethodName: string, fParam1: number, fParam2: number = 1, fParam3: number = 1, fParam4: number = 1, fParam5: number = 1, cParam1: string = null!, cParam2: string = null!, cParam3: string = null!, cParam4: string = null!, cParam5: string = null!): void {
	const callScaleformMovieMethodWithNumberAndString_result = Citizen.invokeNative<void>('0x5EA38B125B8B37E5', iScaleformMovieId, cMethodName, fParam1, fParam2, fParam3, fParam4, fParam5, cParam1, cParam2, cParam3, cParam4, cParam5);
	return callScaleformMovieMethodWithNumberAndString_result;
}