import { ScaleformIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:SET_SCALEFORM_MOVIE_TO_USE_SUPER_LARGE_RT
 *
 * 0x6CDCD138191E7A06

 * 
 * sets that the scaleform movie will be rendered to a super large render target (2048x1024)
 * 
 * This native is used in some casino scripts to fit the scaleform in the rendertarget.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ScaleformIndex} scaleformMovieId
 * @param {boolean} useSuperLargeRT
 */
export function setScaleformMovieToUseSuperLargeRt(scaleformMovieId: ScaleformIndex, useSuperLargeRT: boolean): void {
	const setScaleformMovieToUseSuperLargeRt_result = Citizen.invokeNative<void>('0x6CDCD138191E7A06', scaleformMovieId, useSuperLargeRT);
	return setScaleformMovieToUseSuperLargeRt_result;
}