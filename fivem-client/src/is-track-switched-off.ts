/**
 * CFX:IS_TRACK_SWITCHED_OFF
 *
 * 0xE0C53765

 * Getter for [SWITCH_TRAIN_TRACK](#_0xFD813BB7DB977F20). Determines if ambient trains are able to spawn on this track.
 * 
 * ------------------------------------------------------------------
 * @param {number} track The track id (between 0  27)
 * @returns {boolean}  
 */
export function isTrackSwitchedOff(track: number): boolean {
	const isTrackSwitchedOff_result = Citizen.invokeNative<boolean>('0xE0C53765', track);
	return isTrackSwitchedOff_result;
}