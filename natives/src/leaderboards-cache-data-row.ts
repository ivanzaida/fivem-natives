import { LeaderboardCachedDisplayData } from '@ivanzaida/structures'

/**
 * STATS:LEADERBOARDS_CACHE_DATA_ROW
 *
 * 0x6353C1BD2A5E7EA9

 * 
 * ------------------------------------------------------------------
 * @param {LeaderboardCachedDisplayData} info [Ref]
 * @returns {boolean}  
 */
export function leaderboardsCacheDataRow(info: LeaderboardCachedDisplayData /* ptr */): boolean {
	const leaderboardsCacheDataRow_result = Citizen.invokeNative<boolean>('0x6353C1BD2A5E7EA9', info.dataView);
	return leaderboardsCacheDataRow_result;
}