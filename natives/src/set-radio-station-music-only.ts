/**
 * AUDIO:SET_RADIO_STATION_MUSIC_ONLY
 *
 * 0x247C4DE693AD9B36

 * 
 * 6 calls in the b617d scripts, removed identical lines:
 * 
 * AUDIO::SET_RADIO_STATION_MUSIC_ONLY("RADIO_01_CLASS_ROCK", 1);
 * AUDIO::SET_RADIO_STATION_MUSIC_ONLY(AUDIO::GET_RADIO_STATION_NAME(10), 0);
 * AUDIO::SET_RADIO_STATION_MUSIC_ONLY(AUDIO::GET_RADIO_STATION_NAME(10), 1);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} radioStation
 * @param {boolean} musicOnly
 */
export function setRadioStationMusicOnly(radioStation: string, musicOnly: boolean): void {
	const setRadioStationMusicOnly_result = Citizen.invokeNative<void>('0x247C4DE693AD9B36', radioStation, musicOnly);
	return setRadioStationMusicOnly_result;
}