import { ScaleformReturnIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:GET_SCALEFORM_MOVIE_METHOD_RETURN_VALUE_INT
 *
 * 0x5DEF122A58D4F685

 * 
 * gets the actual return value from the passed return id.
 * 
 * methodReturn: The return value of this native: END_SCALEFORM_MOVIE_METHOD_RETURN_VALUE
 * Used to get a return value from a scaleform function. Returns an int in the same way GET_SCALEFORM_MOVIE_METHOD_RETURN_VALUE_STRING returns a string.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ScaleformReturnIndex} returnId
 * @returns {number}  
 */
export function getScaleformMovieMethodReturnValueInt(returnId: ScaleformReturnIndex): number {
	const getScaleformMovieMethodReturnValueInt_result = Citizen.invokeNative<number>('0x5DEF122A58D4F685', returnId);
	return getScaleformMovieMethodReturnValueInt_result;
}