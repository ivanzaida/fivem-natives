/**
 * AUDIO:SET_RADIO_TRACK
 *
 * 0xE42344700E00B10F

 * 
 * Only found this one in the decompiled scripts:
 * 
 * AUDIO::SET_RADIO_TRACK("RADIO_03_HIPHOP_NEW", "ARM1_RADIO_STARTS");
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} radioStationName
 * @param {string} trackName
 */
export function setRadioTrack(radioStationName: string, trackName: string): void {
	const setRadioTrack_result = Citizen.invokeNative<void>('0xE42344700E00B10F', radioStationName, trackName);
	return setRadioTrack_result;
}