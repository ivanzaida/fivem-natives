import { BinkMovieId } from '@ivanzaida/structures'

/**
 * GRAPHICS:GET_BINK_MOVIE_TIME
 *
 * 0x2362B981748EB883

 * 
 * In percentage: 0.0 - 100.0
 * 
 * 
 * ------------------------------------------------------------------
 * @param {BinkMovieId} movieId
 * @returns {number}  
 */
export function getBinkMovieTime(movieId: BinkMovieId): number {
	const getBinkMovieTime_result = Citizen.invokeNative<number>('0x2362B981748EB883', movieId);
	return getBinkMovieTime_result;
}