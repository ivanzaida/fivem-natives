import { BinkMovieId } from '@ivanzaida/structures'

/**
 * GRAPHICS:SET_BINK_MOVIE_AUDIO_FRONTEND
 *
 * 0x8892E917CE7A0CB0

 * 
 * ------------------------------------------------------------------
 * @param {BinkMovieId} movieId
 * @param {boolean} frontend
 */
export function setBinkMovieAudioFrontend(movieId: BinkMovieId, frontend: boolean): void {
	const setBinkMovieAudioFrontend_result = Citizen.invokeNative<void>('0x8892E917CE7A0CB0', movieId, frontend);
	return setBinkMovieAudioFrontend_result;
}