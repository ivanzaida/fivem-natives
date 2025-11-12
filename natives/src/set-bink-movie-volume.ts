import { BinkMovieId } from '@ivanzaida/structures'

/**
 * GRAPHICS:SET_BINK_MOVIE_VOLUME
 *
 * 0xA24E6A436BF61457

 * 
 * binkMovie: Is return value from _SET_BINK_MOVIE. Has something to do with bink volume? (audRequestedSettings::SetVolumeCurveScale)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {BinkMovieId} movieId
 * @param {number} movieVolume
 */
export function setBinkMovieVolume(movieId: BinkMovieId, movieVolume: number): void {
	const setBinkMovieVolume_result = Citizen.invokeNative<void>('0xA24E6A436BF61457', movieId, movieVolume);
	return setBinkMovieVolume_result;
}