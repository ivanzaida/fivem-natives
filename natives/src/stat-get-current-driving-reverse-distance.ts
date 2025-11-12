/**
 * STATS:STAT_GET_CURRENT_DRIVING_REVERSE_DISTANCE
 *
 * 0xEAE605592B9C789F

 * 
 * Reverse the longest distance without crashing
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function statGetCurrentDrivingReverseDistance(): number {
	const statGetCurrentDrivingReverseDistance_result = Citizen.invokeNative<number>('0xEAE605592B9C789F', );
	return statGetCurrentDrivingReverseDistance_result;
}