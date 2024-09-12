/**
 * MISC:GET_RANDOM_FLOAT_IN_RANGE
 *
 * 0xD2AA6F822D3A55D2

 * 
 * ------------------------------------------------------------------
 * @param {number} minFloat
 * @param {number} maxFloat
 * @returns {number}  
 */
export function getRandomFloatInRange(minFloat: number = 0, maxFloat: number = 1): number {
	const getRandomFloatInRange_result = Citizen.invokeNative<number>('0xD2AA6F822D3A55D2', minFloat, maxFloat);
	return getRandomFloatInRange_result;
}