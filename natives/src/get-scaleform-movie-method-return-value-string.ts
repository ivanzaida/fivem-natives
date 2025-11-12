import { ScaleformReturnIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:GET_SCALEFORM_MOVIE_METHOD_RETURN_VALUE_STRING
 *
 * 0xB78DC0F63757FBD4

 * 
 * gets the actual return value from the passed return id.
 * 
 * methodReturn: The return value of this native: END_SCALEFORM_MOVIE_METHOD_RETURN_VALUE
 * Used to get a return value from a scaleform function. Returns a string in the same way GET_SCALEFORM_MOVIE_METHOD_RETURN_VALUE_INT returns an int.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ScaleformReturnIndex} returnId
 * @returns {string}  
 */
export function getScaleformMovieMethodReturnValueString(returnId: ScaleformReturnIndex): string {
	const getScaleformMovieMethodReturnValueString_result = Citizen.invokeNative<string>('0xB78DC0F63757FBD4', returnId);
	return getScaleformMovieMethodReturnValueString_result;
}