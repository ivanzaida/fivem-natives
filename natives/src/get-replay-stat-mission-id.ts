/**
 * MISC:GET_REPLAY_STAT_MISSION_ID
 *
 * 0x81D4D874CB1DFBE4

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getReplayStatMissionId(): number {
	const getReplayStatMissionId_result = Citizen.invokeNative<number>('0x81D4D874CB1DFBE4', );
	return getReplayStatMissionId_result;
}