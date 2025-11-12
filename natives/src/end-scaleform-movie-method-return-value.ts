import { ScaleformReturnIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:END_SCALEFORM_MOVIE_METHOD_RETURN_VALUE
 *
 * 0x6CA3F2B87712B6A4

 * 
 * end of an actionscript method called on a scaleform movie and returns an id to retrieve the returned value from
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {ScaleformReturnIndex}  
 */
export function endScaleformMovieMethodReturnValue(): ScaleformReturnIndex {
	const endScaleformMovieMethodReturnValue_result = Citizen.invokeNative<ScaleformReturnIndex>('0x6CA3F2B87712B6A4', );
	return endScaleformMovieMethodReturnValue_result;
}