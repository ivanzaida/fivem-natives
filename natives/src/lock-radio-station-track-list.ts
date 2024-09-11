/**
 * AUDIO:LOCK_RADIO_STATION_TRACK_LIST
 *
 * 0x68A74A172B90D43E

 * 
 * ------------------------------------------------------------------
 * @param {string} radioStationName
 * @param {string} trackListName
 */
export function lockRadioStationTrackList(radioStationName: string, trackListName: string): void {
	const lockRadioStationTrackList_result = Citizen.invokeNative<void>('0x68A74A172B90D43E', radioStationName, trackListName);
	return lockRadioStationTrackList_result;
}