/**
 * NETWORK:_NETWORK_GET_RANDOM_FLOAT_RANGED
 *
 * 0xDB1A8B701601A206

 * 
 * ------------------------------------------------------------------
 * @param {number} rangeStart
 * @param {number} rangeEnd
 * @returns {number}  
 */
export function networkGetRandomFloatRanged(rangeStart: number, rangeEnd: number): number {
	const networkGetRandomFloatRanged_result = Citizen.invokeNative<number>('0xDB1A8B701601A206', rangeStart, rangeEnd);
	return networkGetRandomFloatRanged_result;
}