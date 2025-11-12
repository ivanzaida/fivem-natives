/**
 * CFX:GET_TRACK_BRAKING_DISTANCE
 *
 * 0xBF482A5E

 * 
 * ------------------------------------------------------------------
 * @param {number} track The track id (between 0  27)
 * @returns {number}  
 */
export function getTrackBrakingDistance(track: number): number {
	const getTrackBrakingDistance_result = Citizen.invokeNative<number>('0xBF482A5E', track);
	return getTrackBrakingDistance_result;
}