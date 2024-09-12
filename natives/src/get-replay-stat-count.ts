/**
 * MISC:GET_REPLAY_STAT_COUNT
 *
 * 0x536257A79D7C865A

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getReplayStatCount(): number {
	const getReplayStatCount_result = Citizen.invokeNative<number>('0x536257A79D7C865A', );
	return getReplayStatCount_result;
}