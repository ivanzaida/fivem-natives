/**
 * MISC:GET_REPLAY_STAT_MISSION_TYPE
 *
 * 0x16C990F0AEBBC7A3

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getReplayStatMissionType(): number {
	const getReplayStatMissionType_result = Citizen.invokeNative<number>('0x16C990F0AEBBC7A3', );
	return getReplayStatMissionType_result;
}