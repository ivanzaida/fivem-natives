/**
 * STATS:LEADERBOARDS_READ_CLEAR_ALL
 *
 * 0xB3740C450B9A06AE

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function leaderboardsReadClearAll(): number {
	const leaderboardsReadClearAll_result = Citizen.invokeNative<number>('0xB3740C450B9A06AE', );
	return leaderboardsReadClearAll_result;
}