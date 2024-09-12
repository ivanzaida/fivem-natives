import { LeaderboardCachedDisplayData } from '@ivanzaida/structures'

/**
 * STATS:LEADERBOARDS_GET_CACHE_DATA_ROW
 *
 * 0x4B9EEFBC1906C36A

 * 
 * ------------------------------------------------------------------
 * @param {number} id
 * @param {number} row
 * @param {LeaderboardCachedDisplayData} info [Ref]
 * @returns {boolean}  
 */
export function leaderboardsGetCacheDataRow(id: number, row: number, info: LeaderboardCachedDisplayData /* ptr */): boolean {
	const leaderboardsGetCacheDataRow_result = Citizen.invokeNative<boolean>('0x4B9EEFBC1906C36A', id, row, info.dataView);
	return leaderboardsGetCacheDataRow_result;
}