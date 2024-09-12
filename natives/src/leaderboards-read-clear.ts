import { EnumToInt } from '@ivanzaida/structures'

/**
 * STATS:LEADERBOARDS_READ_CLEAR
 *
 * 0x92E48B0F5D4E76F2

 * 
 * ------------------------------------------------------------------
 * @param {number} leaderboardId
 * @param {EnumToInt} leaderboardType
 * @param {number} lb
 * @returns {number}  
 */
export function leaderboardsReadClear(leaderboardId: number, leaderboardType: EnumToInt, lb: number = 1): number {
	const leaderboardsReadClear_result = Citizen.invokeNative<number>('0x92E48B0F5D4E76F2', leaderboardId, leaderboardType, lb);
	return leaderboardsReadClear_result;
}