/**
 * STATS:LEADERBOARDS_CLEAR_CACHE_DATA_ID
 *
 * 0xEB551BF55D9D9721

 * 
 * ------------------------------------------------------------------
 * @param {number} id
 */
export function leaderboardsClearCacheDataId(id: number): void {
	const leaderboardsClearCacheDataId_result = Citizen.invokeNative<void>('0xEB551BF55D9D9721', id);
	return leaderboardsClearCacheDataId_result;
}