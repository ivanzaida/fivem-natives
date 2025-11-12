import { BinkMovieId } from '@ivanzaida/structures'

/**
 * GRAPHICS:DRAW_BINK_MOVIE
 *
 * 0xAED06A53B3F23CC1

 * 
 * Before you can use this command you have to load the movie using SET_BINK_MOVIE.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {BinkMovieId} movieId
 * @param {number} centreX
 * @param {number} centreY
 * @param {number} width
 * @param {number} height
 * @param {number} rotation
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} a
 */
export function drawBinkMovie(movieId: BinkMovieId, centreX: number, centreY: number, width: number, height: number, rotation: number, r: number, g: number, b: number, a: number): void {
	const drawBinkMovie_result = Citizen.invokeNative<void>('0xAED06A53B3F23CC1', movieId, centreX, centreY, width, height, rotation, r, g, b, a);
	return drawBinkMovie_result;
}