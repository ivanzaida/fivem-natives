/**
 * AUDIO:UNLOCK_RADIO_STATION_TRACK_LIST
 *
 * 0x7C236591DA4F980B

 * 
 * AUDIO::UNLOCK_RADIO_STATION_TRACK_LIST("RADIO_16_SILVERLAKE", "MIRRORPARK_LOCKED");
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} radioStationName
 * @param {string} trackListName
 */
export function unlockRadioStationTrackList(radioStationName: string, trackListName: string): void {
	const unlockRadioStationTrackList_result = Citizen.invokeNative<void>('0x7C236591DA4F980B', radioStationName, trackListName);
	return unlockRadioStationTrackList_result;
}