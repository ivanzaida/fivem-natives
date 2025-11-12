import { BinkMovieId } from '@ivanzaida/structures'

/**
 * GRAPHICS:SET_BINK_MOVIE
 *
 * 0x7DB4C41144D9961A

 * 
 * To display the movie, call PLAY_BINK_MOVIE every frame. Once you've finished with the movie, call RELEASE_BINK_MOVIE to free the memory.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} movieName
 * @returns {BinkMovieId}  
 */
export function setBinkMovie(movieName: string): BinkMovieId {
	const setBinkMovie_result = Citizen.invokeNative<BinkMovieId>('0x7DB4C41144D9961A', movieName);
	return setBinkMovie_result;
}