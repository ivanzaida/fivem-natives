import { EnumToInt } from '@ivanzaida/structures'

/**
 * STATS:LEADERBOARDS_READ_SUCCESSFUL
 *
 * 0x7BBF11C251338D41

 * 
 * ------------------------------------------------------------------
 * @param {number} leaderboardId
 * @param {EnumToInt} leaderboardType
 * @param {number} lb
 * @returns {boolean}  
 */
export function leaderboardsReadSuccessful(leaderboardId: number, leaderboardType: EnumToInt, lb: number = 0): boolean {
	const leaderboardsReadSuccessful_result = Citizen.invokeNative<boolean>('0x7BBF11C251338D41', leaderboardId, leaderboardType, lb);
	return leaderboardsReadSuccessful_result;
}