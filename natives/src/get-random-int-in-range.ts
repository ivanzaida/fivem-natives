/**
 * MISC:GET_RANDOM_INT_IN_RANGE
 *
 * 0xC5935DFB3F39785A

 * 
 * Gets a random int from the range passed in. More info..
 * Be careful - this will only ever return integers between MinInt and (MaxInt-1) inclusive.
 * e.g. GET_RANDOM_INT_IN_RANGE(0, 5) will only ever return 0, 1, 2, 3 or 4. It will never return 5.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} minInt
 * @param {number} maxInt
 * @returns {number}  
 */
export function getRandomIntInRange(minInt: number = 0, maxInt: number = 65535): number {
	const getRandomIntInRange_result = Citizen.invokeNative<number>('0xC5935DFB3F39785A', minInt, maxInt);
	return getRandomIntInRange_result;
}