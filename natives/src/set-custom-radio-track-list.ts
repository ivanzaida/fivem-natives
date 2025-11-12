/**
 * AUDIO:SET_CUSTOM_RADIO_TRACK_LIST
 *
 * 0xB1A857E9C5658D10

 * 
 * Queues up a custom track list on the specified radio station.  The content in the track list will be played as soon as possible.
 * The station does not have to be frozen.
 * 
 * Examples:
 * 
 * AUDIO::SET_CUSTOM_RADIO_TRACK_LIST("RADIO_01_CLASS_ROCK", "END_CREDITS_KILL_MICHAEL", 1);
 * AUDIO::SET_CUSTOM_RADIO_TRACK_LIST("RADIO_01_CLASS_ROCK", "END_CREDITS_KILL_MICHAEL", 1);
 * AUDIO::SET_CUSTOM_RADIO_TRACK_LIST("RADIO_01_CLASS_ROCK", "END_CREDITS_KILL_TREVOR", 1);
 * AUDIO::SET_CUSTOM_RADIO_TRACK_LIST("RADIO_01_CLASS_ROCK", "END_CREDITS_SAVE_MICHAEL_TREVOR", 1);
 * AUDIO::SET_CUSTOM_RADIO_TRACK_LIST("RADIO_01_CLASS_ROCK", "OFF_ROAD_RADIO_ROCK_LIST", 1);
 * AUDIO::SET_CUSTOM_RADIO_TRACK_LIST("RADIO_06_COUNTRY", "MAGDEMO2_RADIO_DINGHY", 1);
 * AUDIO::SET_CUSTOM_RADIO_TRACK_LIST("RADIO_16_SILVERLAKE", "SEA_RACE_RADIO_PLAYLIST", 1);
 * AUDIO::SET_CUSTOM_RADIO_TRACK_LIST("RADIO_01_CLASS_ROCK", "OFF_ROAD_RADIO_ROCK_LIST", 1);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} radioStationName
 * @param {string} trackListName
 * @param {boolean} forceNow TRUE then the current track will be interrupted by the tracklist
 */
export function setCustomRadioTrackList(radioStationName: string, trackListName: string, forceNow: boolean = false): void {
	const setCustomRadioTrackList_result = Citizen.invokeNative<void>('0xB1A857E9C5658D10', radioStationName, trackListName, forceNow);
	return setCustomRadioTrackList_result;
}