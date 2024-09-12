/**
 * STATS:LEADERBOARDS_GET_CACHE_TIME
 *
 * 0x992FDA8495111E7E

 * 
 * ------------------------------------------------------------------
 * @param {number} id
 * @returns {number}  
 */
export function leaderboardsGetCacheTime(id: number): number {
	const leaderboardsGetCacheTime_result = Citizen.invokeNative<number>('0x992FDA8495111E7E', id);
	return leaderboardsGetCacheTime_result;
}