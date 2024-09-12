/**
 * STATS:LEADERBOARDS_READ_ANY_PENDING
 *
 * 0x5824DB463E853B3E

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function leaderboardsReadAnyPending(): boolean {
	const leaderboardsReadAnyPending_result = Citizen.invokeNative<boolean>('0x5824DB463E853B3E', );
	return leaderboardsReadAnyPending_result;
}