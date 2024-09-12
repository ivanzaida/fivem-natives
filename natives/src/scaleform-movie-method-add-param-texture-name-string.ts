/**
 * GRAPHICS:SCALEFORM_MOVIE_METHOD_ADD_PARAM_TEXTURE_NAME_STRING
 *
 * 0x3585BEBEDC67FCC7

 * 
 * ------------------------------------------------------------------
 * @param {string} textureName
 */
export function scaleformMovieMethodAddParamTextureNameString(textureName: string): void {
	const scaleformMovieMethodAddParamTextureNameString_result = Citizen.invokeNative<void>('0x3585BEBEDC67FCC7', textureName);
	return scaleformMovieMethodAddParamTextureNameString_result;
}