import { BinkMovieId } from '@ivanzaida/structures'

/**
 * GRAPHICS:PLAY_BINK_MOVIE
 *
 * 0x202024EB1E643238

 * 
 * ------------------------------------------------------------------
 * @param {BinkMovieId} movieId
 */
export function playBinkMovie(movieId: BinkMovieId): void {
	const playBinkMovie_result = Citizen.invokeNative<void>('0x202024EB1E643238', movieId);
	return playBinkMovie_result;
}