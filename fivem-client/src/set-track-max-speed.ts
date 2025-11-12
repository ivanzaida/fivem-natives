/**
 * CFX:SET_TRACK_MAX_SPEED
 *
 * 0x37BFC732

 * Sets the max speed for the train tracks. Used by ambient trains and for station calculations
 * 
 * ------------------------------------------------------------------
 * @param {number} track The track id (between 0  27)
 * @param {number} newSpeed The tracks new speed
 */
export function setTrackMaxSpeed(track: number, newSpeed: number): void {
	const setTrackMaxSpeed_result = Citizen.invokeNative<void>('0x37BFC732', track, newSpeed);
	return setTrackMaxSpeed_result;
}