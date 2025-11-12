/**
 * CFX:IS_TRACK_ENABLED
 *
 * 0x31E695CB

 * Getter for [SET_TRACK_ENABLED](#_0x4B41E84C)
 * 
 * ------------------------------------------------------------------
 * @param {number} track The track id (between 0  27)
 * @returns {boolean}  
 */
export function isTrackEnabled(track: number): boolean {
	const isTrackEnabled_result = Citizen.invokeNative<boolean>('0x31E695CB', track);
	return isTrackEnabled_result;
}