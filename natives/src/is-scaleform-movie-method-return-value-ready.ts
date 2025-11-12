import { ScaleformReturnIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:IS_SCALEFORM_MOVIE_METHOD_RETURN_VALUE_READY
 *
 * 0xA6F779AA284EB20E

 * 
 * checks whether the return ID is ready to use yet
 * 
 * methodReturn: The return value of this native: END_SCALEFORM_MOVIE_METHOD_RETURN_VALUE
 * Returns true if the return value of a scaleform function is ready to be collected (using GET_SCALEFORM_MOVIE_METHOD_RETURN_VALUE_STRING or GET_SCALEFORM_MOVIE_METHOD_RETURN_VALUE_INT).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ScaleformReturnIndex} returnId
 * @returns {boolean}  
 */
export function isScaleformMovieMethodReturnValueReady(returnId: ScaleformReturnIndex): boolean {
	const isScaleformMovieMethodReturnValueReady_result = Citizen.invokeNative<boolean>('0xA6F779AA284EB20E', returnId);
	return isScaleformMovieMethodReturnValueReady_result;
}