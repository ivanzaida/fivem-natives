/**
 * MISC:GET_RANDOM_MWC_INT_IN_RANGE
 *
 * 0x4AFA59A11CC00538

 * 
 * Gets a random int from the MWC RNG with range passed in. More info..
 * Be careful - this will only ever return integers between MinInt and (MaxInt-1) inclusive.
 * e.g. GET_RANDOM_INT_IN_RANGE(0, 5) will only ever return 0, 1, 2, 3 or 4. It will never return 5.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} minInt
 * @param {number} maxInt
 * @returns {number}  
 */
export function getRandomMwcIntInRange(minInt: number = 0, maxInt: number = 65535): number {
	const getRandomMwcIntInRange_result = Citizen.invokeNative<number>('0x4AFA59A11CC00538', minInt, maxInt);
	return getRandomMwcIntInRange_result;
}