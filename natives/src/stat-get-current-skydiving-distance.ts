/**
 * STATS:STAT_GET_CURRENT_SKYDIVING_DISTANCE
 *
 * 0xA318B59A6358E821

 * 
 * Fall the longest distance with a parachute before opening it
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function statGetCurrentSkydivingDistance(): number {
	const statGetCurrentSkydivingDistance_result = Citizen.invokeNative<number>('0xA318B59A6358E821', );
	return statGetCurrentSkydivingDistance_result;
}