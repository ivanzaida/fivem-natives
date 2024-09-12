/**
 * AUDIO:GET_CURRENT_TRACK_PLAY_TIME
 *
 * 0x19CC911A97AF8F27

 * 
 * ------------------------------------------------------------------
 * @param {string} radioStationName
 * @returns {number}  
 */
export function getCurrentTrackPlayTime(radioStationName: string): number {
	const getCurrentTrackPlayTime_result = Citizen.invokeNative<number>('0x19CC911A97AF8F27', radioStationName);
	return getCurrentTrackPlayTime_result;
}