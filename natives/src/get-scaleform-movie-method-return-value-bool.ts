import { ScaleformReturnIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:GET_SCALEFORM_MOVIE_METHOD_RETURN_VALUE_BOOL
 *
 * 0x59252C070F1B0428

 * 
 * gets the actual return value from the passed return id.
 * 
 * methodReturn: The return value of this native: END_SCALEFORM_MOVIE_METHOD_RETURN_VALUE
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ScaleformReturnIndex} returnId
 * @returns {boolean}  
 */
export function getScaleformMovieMethodReturnValueBool(returnId: ScaleformReturnIndex): boolean {
	const getScaleformMovieMethodReturnValueBool_result = Citizen.invokeNative<boolean>('0x59252C070F1B0428', returnId);
	return getScaleformMovieMethodReturnValueBool_result;
}