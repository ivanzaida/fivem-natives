/**
 * STATS:LEADERBOARDS_GET_CACHE_NUMBER_OF_ROWS
 *
 * 0xEDF2663D6A2097BD

 * 
 * ------------------------------------------------------------------
 * @param {number} id
 * @returns {number}  
 */
export function leaderboardsGetCacheNumberOfRows(id: number): number {
	const leaderboardsGetCacheNumberOfRows_result = Citizen.invokeNative<number>('0xEDF2663D6A2097BD', id);
	return leaderboardsGetCacheNumberOfRows_result;
}