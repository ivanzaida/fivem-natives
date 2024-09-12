import { EnumToInt } from '@ivanzaida/structures'

/**
 * STATS:LEADERBOARDS_GET_COLUMN_TYPE
 *
 * 0x3C041FAC0ACE6A45

 * 
 * ------------------------------------------------------------------
 * @param {number} leaderboardId
 * @param {EnumToInt} type
 * @param {number} column
 * @returns {number}  
 */
export function leaderboardsGetColumnType(leaderboardId: number, type: EnumToInt, column: number): number {
	const leaderboardsGetColumnType_result = Citizen.invokeNative<number>('0x3C041FAC0ACE6A45', leaderboardId, type, column);
	return leaderboardsGetColumnType_result;
}