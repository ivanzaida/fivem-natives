/**
 * CFX:SET_TRACK_BRAKING_DISTANCE
 *
 * 0x77EB78D0

 * Sets the braking distance of the track. Used by trains to determine the point to slow down when entering a station.
 * 
 * ------------------------------------------------------------------
 * @param {number} track The track id (between 0  27)
 * @param {number} brakingDistance The new braking distance
 */
export function setTrackBrakingDistance(track: number, brakingDistance: number): void {
	const setTrackBrakingDistance_result = Citizen.invokeNative<void>('0x77EB78D0', track, brakingDistance);
	return setTrackBrakingDistance_result;
}