/**
 * STATS:PLAYSTATS_HOLD_UP_MISSION_DONE
 *
 * 0xF1A3507F1CCB5AB2

 * 
 * ------------------------------------------------------------------
 * @param {number} ambientMissionId
 * @param {number} xpEarned
 * @param {number} cashEarned
 * @param {number} shopkeepersKilled
 */
export function playstatsHoldUpMissionDone(ambientMissionId: number, xpEarned: number, cashEarned: number, shopkeepersKilled: number): void {
	const playstatsHoldUpMissionDone_result = Citizen.invokeNative<void>('0xF1A3507F1CCB5AB2', ambientMissionId, xpEarned, cashEarned, shopkeepersKilled);
	return playstatsHoldUpMissionDone_result;
}