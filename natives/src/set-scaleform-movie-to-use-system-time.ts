import { ScaleformIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:SET_SCALEFORM_MOVIE_TO_USE_SYSTEM_TIME
 *
 * 0x2EE4366DBD59BB7A

 * 
 * sets that the scaleform movie is no longer needed & can be deleted
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ScaleformIndex} scaleformMovieId
 * @param {boolean} useSystemTime
 */
export function setScaleformMovieToUseSystemTime(scaleformMovieId: ScaleformIndex, useSystemTime: boolean): void {
	const setScaleformMovieToUseSystemTime_result = Citizen.invokeNative<void>('0x2EE4366DBD59BB7A', scaleformMovieId, useSystemTime);
	return setScaleformMovieToUseSystemTime_result;
}