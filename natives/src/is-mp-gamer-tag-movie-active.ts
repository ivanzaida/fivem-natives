/**
 * HUD:IS_MP_GAMER_TAG_MOVIE_ACTIVE
 *
 * 0x0ED8AE340A9B5CF5

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isMpGamerTagMovieActive(): boolean {
	const isMpGamerTagMovieActive_result = Citizen.invokeNative<boolean>('0x0ED8AE340A9B5CF5', );
	return isMpGamerTagMovieActive_result;
}