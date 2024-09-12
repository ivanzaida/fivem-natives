/**
 * AUDIO:GET_CURRENT_TRACK_SOUND_NAME
 *
 * 0xBFF9D1DD2EA1B515

 * 
 * ------------------------------------------------------------------
 * @param {string} radioStationName
 * @returns {number}  
 */
export function getCurrentTrackSoundName(radioStationName: string): number {
	const getCurrentTrackSoundName_result = Citizen.invokeNative<number>('0xBFF9D1DD2EA1B515', radioStationName);
	return getCurrentTrackSoundName_result;
}