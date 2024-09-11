/**
 * AUDIO:SET_RADIO_TRACK_WITH_START_OFFSET
 *
 * 0x117ED8E568A3BE94

 * 
 * ------------------------------------------------------------------
 * @param {string} radioStationName
 * @param {string} trackName
 * @param {number} timeOffsetMs
 */
export function setRadioTrackWithStartOffset(radioStationName: string, trackName: string, timeOffsetMs: number): void {
	const setRadioTrackWithStartOffset_result = Citizen.invokeNative<void>('0x117ED8E568A3BE94', radioStationName, trackName, timeOffsetMs);
	return setRadioTrackWithStartOffset_result;
}