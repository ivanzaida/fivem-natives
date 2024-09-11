/**
 * STATS:LEADERBOARDS_GET_CACHE_EXISTS
 *
 * 0xC0967BD19C389A28

 * 
 * ------------------------------------------------------------------
 * @param {number} id
 * @returns {boolean}  
 */
export function leaderboardsGetCacheExists(id: number): boolean {
	const leaderboardsGetCacheExists_result = Citizen.invokeNative<boolean>('0xC0967BD19C389A28', id);
	return leaderboardsGetCacheExists_result;
}