/**
 * NETWORK:NETWORK_GET_RANDOM_INT_RANGED
 *
 * 0x5A6DA0A2EEDE8B78

 * 
 * Same as GET_RANDOM_INT_IN_RANGE
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} minimum
 * @param {number} maximum
 * @returns {number}  
 */
export function networkGetRandomIntRanged(minimum: number, maximum: number): number {
	const networkGetRandomIntRanged_result = Citizen.invokeNative<number>('0x5A6DA0A2EEDE8B78', minimum, maximum);
	return networkGetRandomIntRanged_result;
}