/**
 * AUDIO:FORCE_MUSIC_TRACK_LIST
 *
 * 0x07B35A877A492E93

 * 
 * Changes start time of a tracklist (milliseconds)
 * R uses a random int: MISC::GET_RANDOM_INT_IN_RANGE(0, 13)  60000)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} radioStationName
 * @param {string} trackListName
 * @param {number} timeOffsetMs
 */
export function forceMusicTrackList(radioStationName: string, trackListName: string, timeOffsetMs: number): void {
	const forceMusicTrackList_result = Citizen.invokeNative<void>('0x07B35A877A492E93', radioStationName, trackListName, timeOffsetMs);
	return forceMusicTrackList_result;
}