import { ELeaderboardInputs } from '@ivanzaida/structures'

/**
 * STATS:LEADERBOARDS_WRITE_ADD_COLUMN_LONG
 *
 * 0x4D9375FB05743625

 * 
 * ------------------------------------------------------------------
 * @param {ELeaderboardInputs} fieldId
 * @param {number} a
 * @param {number} b
 */
export function leaderboardsWriteAddColumnLong(fieldId: ELeaderboardInputs | number, a: number, b: number): void {
	const leaderboardsWriteAddColumnLong_result = Citizen.invokeNative<void>('0x4D9375FB05743625', fieldId, a, b);
	return leaderboardsWriteAddColumnLong_result;
}