/**
 * STATS:LEADERBOARDS_CLEAR_CACHE_DATA
 *
 * 0xB83DA0A55841C11A

 * 
 * ------------------------------------------------------------------
 */
export function leaderboardsClearCacheData(): void {
	const leaderboardsClearCacheData_result = Citizen.invokeNative<void>('0xB83DA0A55841C11A', );
	return leaderboardsClearCacheData_result;
}