/**
 * CFX:GET_ROPE_TIME_MULTIPLIER
 *
 * 0XF341E6CA

 * 
 * ------------------------------------------------------------------
 * @param {number} rope The rope to get the time multiplier for.
 * @returns {number}  The rope's time multiplier.
 */
export function getRopeTimeMultiplier(rope: number): number {
	const getRopeTimeMultiplier_result = Citizen.invokeNative<number>('0XF341E6CA', rope);
	return getRopeTimeMultiplier_result;
}