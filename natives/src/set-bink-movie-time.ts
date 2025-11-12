import { BinkMovieId } from '@ivanzaida/structures'

/**
 * GRAPHICS:SET_BINK_MOVIE_TIME
 *
 * 0xBB1B3BE5A5E8B50C

 * 
 * In percentage: 0.0 - 100.0
 * 
 * 
 * ------------------------------------------------------------------
 * @param {BinkMovieId} movieId
 * @param {number} movieTime
 */
export function setBinkMovieTime(movieId: BinkMovieId, movieTime: number): void {
	const setBinkMovieTime_result = Citizen.invokeNative<void>('0xBB1B3BE5A5E8B50C', movieId, movieTime);
	return setBinkMovieTime_result;
}