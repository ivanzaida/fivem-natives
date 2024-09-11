import { EnumToInt } from '@ivanzaida/structures'

/**
 * STATS:LEADERBOARDS_READ_PENDING
 *
 * 0x2F700943A3341959

 * 
 * ------------------------------------------------------------------
 * @param {number} leaderboardId
 * @param {EnumToInt} leaderboardType
 * @param {number} lb
 * @returns {boolean}  
 */
export function leaderboardsReadPending(leaderboardId: number, leaderboardType: EnumToInt, lb: number = 1): boolean {
	const leaderboardsReadPending_result = Citizen.invokeNative<boolean>('0x2F700943A3341959', leaderboardId, leaderboardType, lb);
	return leaderboardsReadPending_result;
}