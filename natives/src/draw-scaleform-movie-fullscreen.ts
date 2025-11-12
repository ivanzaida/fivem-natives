import { ScaleformIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:DRAW_SCALEFORM_MOVIE_FULLSCREEN
 *
 * 0xA91A4C18A2DB01BD

 * 
 * movies are drawn in order, with the latest drawn on top.
 * 
 * unk is not used so no need
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ScaleformIndex} scaleformMovieId
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} a
 * @param {number} stereoFlag
 */
export function drawScaleformMovieFullscreen(scaleformMovieId: ScaleformIndex, r: number, g: number, b: number, a: number, stereoFlag: number = 0): void {
	const drawScaleformMovieFullscreen_result = Citizen.invokeNative<void>('0xA91A4C18A2DB01BD', scaleformMovieId, r, g, b, a, stereoFlag);
	return drawScaleformMovieFullscreen_result;
}