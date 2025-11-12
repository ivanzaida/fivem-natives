/**
 * CFX:GET_TRACK_MAX_SPEED
 *
 * 0x34EE2BF3

 * 
 * ------------------------------------------------------------------
 * @param {number} track The track id (between 0  27)
 * @returns {number}  
 */
export function getTrackMaxSpeed(track: number): number {
	const getTrackMaxSpeed_result = Citizen.invokeNative<number>('0x34EE2BF3', track);
	return getTrackMaxSpeed_result;
}