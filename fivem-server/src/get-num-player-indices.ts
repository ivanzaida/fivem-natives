/**
 * CFX:GET_NUM_PLAYER_INDICES
 *
 * 0X63D13184

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getNumPlayerIndices(): number {
	const getNumPlayerIndices_result = Citizen.invokeNative<number>('0X63D13184', );
	return getNumPlayerIndices_result;
}