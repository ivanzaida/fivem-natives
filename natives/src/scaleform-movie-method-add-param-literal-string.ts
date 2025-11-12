/**
 * GRAPHICS:SCALEFORM_MOVIE_METHOD_ADD_PARAM_LITERAL_STRING
 *
 * 0xA9A70CB35AC098D9

 * 
 * passes a LITERAL STRING to the method call.  Must be wrapped in a BEGIN & END call but can include other ADD_PARAM calls
 * 
 * Same as SCALEFORM_MOVIE_METHOD_ADD_PARAM_TEXTURE_NAME_STRING
 * Both SCALEFORM_MOVIE_METHOD_ADD_PARAM_TEXTURE_NAME_STRING / _SCALEFORM_MOVIE_METHOD_ADD_PARAM_TEXTURE_NAME_STRING_2 works, but _SCALEFORM_MOVIE_METHOD_ADD_PARAM_TEXTURE_NAME_STRING_2 is usually used for "name" (organisation, players..).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} param
 */
export function scaleformMovieMethodAddParamLiteralString(param: string): void {
	const scaleformMovieMethodAddParamLiteralString_result = Citizen.invokeNative<void>('0xA9A70CB35AC098D9', param);
	return scaleformMovieMethodAddParamLiteralString_result;
}