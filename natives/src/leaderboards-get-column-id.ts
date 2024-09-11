import { EnumToInt } from '@ivanzaida/structures'

/**
 * STATS:LEADERBOARDS_GET_COLUMN_ID
 *
 * 0x54F72D02D777FBCB

 * 
 * ------------------------------------------------------------------
 * @param {number} leaderboardId
 * @param {EnumToInt} type
 * @param {number} column
 * @returns {number}  
 */
export function leaderboardsGetColumnId(leaderboardId: number, type: EnumToInt, column: number): number {
	const leaderboardsGetColumnId_result = Citizen.invokeNative<number>('0x54F72D02D777FBCB', leaderboardId, type, column);
	return leaderboardsGetColumnId_result;
}