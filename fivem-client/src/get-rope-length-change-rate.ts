/**
 * CFX:GET_ROPE_LENGTH_CHANGE_RATE
 *
 * 0X66D70EA3

 * 
 * ------------------------------------------------------------------
 * @param {number} rope The rope to get the length change rate for.
 * @returns {number}  The rope's length change rate.
 */
export function getRopeLengthChangeRate(rope: number): number {
	const getRopeLengthChangeRate_result = Citizen.invokeNative<number>('0X66D70EA3', rope);
	return getRopeLengthChangeRate_result;
}