/**
 * GRAPHICS:SCALEFORM_MOVIE_METHOD_ADD_PARAM_FLOAT
 *
 * 0x74BF156C860580D4

 * 
 * passes a FLOAT to the method call.  Must be wrapped in a BEGIN & END call but can include other ADD_PARAM calls
 * 
 * Pushes a float for the Scaleform function onto the stack.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} param
 */
export function scaleformMovieMethodAddParamFloat(param: number): void {
	const scaleformMovieMethodAddParamFloat_result = Citizen.invokeNative<void>('0x74BF156C860580D4', param);
	return scaleformMovieMethodAddParamFloat_result;
}