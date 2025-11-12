/**
 * AUDIO:CLEAR_CUSTOM_RADIO_TRACK_LIST
 *
 * 0x7035CF3AB08A7AF7

 * 
 * 3 calls in the b617d scripts, removed duplicate.
 * 
 * AUDIO::CLEAR_CUSTOM_RADIO_TRACK_LIST("RADIO_16_SILVERLAKE");
 * AUDIO::CLEAR_CUSTOM_RADIO_TRACK_LIST("RADIO_01_CLASS_ROCK");
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} radioStationName
 */
export function clearCustomRadioTrackList(radioStationName: string): void {
	const clearCustomRadioTrackList_result = Citizen.invokeNative<void>('0x7035CF3AB08A7AF7', radioStationName);
	return clearCustomRadioTrackList_result;
}