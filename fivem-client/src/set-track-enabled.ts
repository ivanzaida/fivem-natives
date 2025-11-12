/**
 * CFX:SET_TRACK_ENABLED
 *
 * 0x4B41E84C

 * Toggles the track being active. If disabled mission trains will not be able to spawn on this track and will look for the next closest track to spawn
 * 
 * ------------------------------------------------------------------
 * @param {number} track The track id (between 0  27)
 * @param {boolean} enabled Should this track be enabled
 */
export function setTrackEnabled(track: number, enabled: boolean): void {
	const setTrackEnabled_result = Citizen.invokeNative<void>('0x4B41E84C', track, enabled);
	return setTrackEnabled_result;
}