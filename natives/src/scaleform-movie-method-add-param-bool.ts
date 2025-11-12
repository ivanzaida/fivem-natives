/**
 * GRAPHICS:SCALEFORM_MOVIE_METHOD_ADD_PARAM_BOOL
 *
 * 0x557F1E2300EF1A3E

 * 
 * passes a BOOL to the method call.  Must be wrapped in a BEGIN & END call but can include other ADD_PARAM calls
 * 
 * Pushes a boolean for the Scaleform function onto the stack.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} param
 */
export function scaleformMovieMethodAddParamBool(param: boolean): void {
	const scaleformMovieMethodAddParamBool_result = Citizen.invokeNative<void>('0x557F1E2300EF1A3E', param);
	return scaleformMovieMethodAddParamBool_result;
}