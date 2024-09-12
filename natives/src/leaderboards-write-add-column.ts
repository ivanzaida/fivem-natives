import { ELeaderboardInputs } from '@ivanzaida/structures'

/**
 * STATS:LEADERBOARDS_WRITE_ADD_COLUMN
 *
 * 0x3573EC2255786C32

 * 
 * ------------------------------------------------------------------
 * @param {ELeaderboardInputs} fieldId
 * @param {number} ivalue
 * @param {number} fvalue
 */
export function leaderboardsWriteAddColumn(fieldId: ELeaderboardInputs | number, ivalue: number, fvalue: number): void {
	const leaderboardsWriteAddColumn_result = Citizen.invokeNative<void>('0x3573EC2255786C32', fieldId, ivalue, fvalue);
	return leaderboardsWriteAddColumn_result;
}