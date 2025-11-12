/**
 * GRAPHICS:SCALEFORM_MOVIE_METHOD_ADD_PARAM_INT
 *
 * 0x330108B080A2132F

 * 
 * passes an INT to the method call.  Must be wrapped in a BEGIN & END call but can include other ADD_PARAM calls
 * 
 * Pushes an integer for the Scaleform function onto the stack.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} param
 */
export function scaleformMovieMethodAddParamInt(param: number): void {
	const scaleformMovieMethodAddParamInt_result = Citizen.invokeNative<void>('0x330108B080A2132F', param);
	return scaleformMovieMethodAddParamInt_result;
}