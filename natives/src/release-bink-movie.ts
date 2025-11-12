import { BinkMovieId } from '@ivanzaida/structures'

/**
 * GRAPHICS:RELEASE_BINK_MOVIE
 *
 * 0xA3B3261566EE06A5

 * 
 * This command should be called when you are finished with a movie. It frees up the memory allocated by SET_BINK_MOVIE.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {BinkMovieId} movieId
 */
export function releaseBinkMovie(movieId: BinkMovieId): void {
	const releaseBinkMovie_result = Citizen.invokeNative<void>('0xA3B3261566EE06A5', movieId);
	return releaseBinkMovie_result;
}