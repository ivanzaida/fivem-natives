/**
 * AUDIO:UPDATE_UNLOCKABLE_DJ_RADIO_TRACKS
 *
 * 0x66B137F3AE54333B

 * 
 * Just a nullsub (i.e. does absolutely nothing) since build 1604.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} allowTrackReprioritization
 */
export function updateUnlockableDjRadioTracks(allowTrackReprioritization: boolean): void {
	const updateUnlockableDjRadioTracks_result = Citizen.invokeNative<void>('0x66B137F3AE54333B', allowTrackReprioritization);
	return updateUnlockableDjRadioTracks_result;
}