/**
 * GRAPHICS:SCALEFORM_MOVIE_METHOD_ADD_PARAM_PLAYER_NAME_STRING
 *
 * 0xCE3E870AC37B4253

 * 
 * ------------------------------------------------------------------
 * @param {string} playerName
 */
export function scaleformMovieMethodAddParamPlayerNameString(playerName: string): void {
	const scaleformMovieMethodAddParamPlayerNameString_result = Citizen.invokeNative<void>('0xCE3E870AC37B4253', playerName);
	return scaleformMovieMethodAddParamPlayerNameString_result;
}