/**
 * STATS:STAT_GET_CURRENT_NEAR_MISS_NOCRASH_PRECISE
 *
 * 0xDA0C268B09050750

 * 
 * Warning, this is used for challenges
 * 
 * Perform the most near misses with other vehicles in a land vehicle without crashing
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function statGetCurrentNearMissNocrashPrecise(): number {
	const statGetCurrentNearMissNocrashPrecise_result = Citizen.invokeNative<number>('0xDA0C268B09050750', );
	return statGetCurrentNearMissNocrashPrecise_result;
}