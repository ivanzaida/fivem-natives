import { IntRef } from '@ivanzaida/structures'

/**
 * GRAPHICS:SET_SCALEFORM_MOVIE_AS_NO_LONGER_NEEDED
 *
 * 0xD314260005F064BF

 * 
 * sets that the scaleform movie is no longer needed & can be deleted
 * 
 * 
 * ------------------------------------------------------------------
 * @param {IntRef} scaleformMovieId [Ref]
 */
export function setScaleformMovieAsNoLongerNeeded(scaleformMovieId: IntRef /* ptr */): void {
	const setScaleformMovieAsNoLongerNeeded_result = Citizen.invokeNative<void>('0xD314260005F064BF', scaleformMovieId.dataView);
	return setScaleformMovieAsNoLongerNeeded_result;
}