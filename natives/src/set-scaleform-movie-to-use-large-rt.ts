import { ScaleformIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:SET_SCALEFORM_MOVIE_TO_USE_LARGE_RT
 *
 * 0x32323864D97FCFF0

 * 
 * sets that the scaleform movie will be rendered to a large render target (1280x720)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ScaleformIndex} scaleformMovieId
 * @param {boolean} useLargeRT
 */
export function setScaleformMovieToUseLargeRt(scaleformMovieId: ScaleformIndex, useLargeRT: boolean): void {
	const setScaleformMovieToUseLargeRt_result = Citizen.invokeNative<void>('0x32323864D97FCFF0', scaleformMovieId, useLargeRT);
	return setScaleformMovieToUseLargeRt_result;
}