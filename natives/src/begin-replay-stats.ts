/**
 * MISC:BEGIN_REPLAY_STATS
 *
 * 0x2133FE32510D05F7

 * 
 * ------------------------------------------------------------------
 * @param {number} missionId
 * @param {number} missionType
 */
export function beginReplayStats(missionId: number, missionType: number): void {
	const beginReplayStats_result = Citizen.invokeNative<void>('0x2133FE32510D05F7', missionId, missionType);
	return beginReplayStats_result;
}