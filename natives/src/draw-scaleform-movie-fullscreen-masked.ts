import { ScaleformIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:DRAW_SCALEFORM_MOVIE_FULLSCREEN_MASKED
 *
 * 0xDBCD9A6B9D073786

 * 
 * movies are drawn in order, with the latest drawn on top.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ScaleformIndex} foregroundMovieId
 * @param {ScaleformIndex} backgroundMovieId
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} a
 */
export function drawScaleformMovieFullscreenMasked(foregroundMovieId: ScaleformIndex, backgroundMovieId: ScaleformIndex, r: number, g: number, b: number, a: number): void {
	const drawScaleformMovieFullscreenMasked_result = Citizen.invokeNative<void>('0xDBCD9A6B9D073786', foregroundMovieId, backgroundMovieId, r, g, b, a);
	return drawScaleformMovieFullscreenMasked_result;
}