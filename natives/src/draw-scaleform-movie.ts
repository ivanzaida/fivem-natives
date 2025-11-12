import { ScaleformIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:DRAW_SCALEFORM_MOVIE
 *
 * 0x6D16B99FEB0AFFF1

 * 
 * movies are drawn in order, with the latest drawn on top.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ScaleformIndex} scaleformMovieId
 * @param {number} centreX
 * @param {number} centreY
 * @param {number} width
 * @param {number} height
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} a
 * @param {number} stereoFlag
 */
export function drawScaleformMovie(scaleformMovieId: ScaleformIndex, centreX: number, centreY: number, width: number, height: number, r: number, g: number, b: number, a: number, stereoFlag: number = 0): void {
	const drawScaleformMovie_result = Citizen.invokeNative<void>('0x6D16B99FEB0AFFF1', scaleformMovieId, centreX, centreY, width, height, r, g, b, a, stereoFlag);
	return drawScaleformMovie_result;
}