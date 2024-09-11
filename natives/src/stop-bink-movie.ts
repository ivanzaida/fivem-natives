import { BinkMovieId } from '@ivanzaida/structures'

/**
 * GRAPHICS:STOP_BINK_MOVIE
 *
 * 0x3A525484C63925D6

 * 
 * ------------------------------------------------------------------
 * @param {BinkMovieId} movieId
 */
export function stopBinkMovie(movieId: BinkMovieId): void {
	const stopBinkMovie_result = Citizen.invokeNative<void>('0x3A525484C63925D6', movieId);
	return stopBinkMovie_result;
}