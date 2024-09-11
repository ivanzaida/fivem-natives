import { EnumToInt } from '@ivanzaida/structures'

/**
 * STATS:LEADERBOARDS_GET_NUMBER_OF_COLUMNS
 *
 * 0x6D2024112D9A9660

 * 
 * ------------------------------------------------------------------
 * @param {number} leaderboardId
 * @param {EnumToInt} type
 * @returns {number}  
 */
export function leaderboardsGetNumberOfColumns(leaderboardId: number, type: EnumToInt): number {
	const leaderboardsGetNumberOfColumns_result = Citizen.invokeNative<number>('0x6D2024112D9A9660', leaderboardId, type);
	return leaderboardsGetNumberOfColumns_result;
}