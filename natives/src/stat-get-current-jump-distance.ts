/**
 * STATS:STAT_GET_CURRENT_JUMP_DISTANCE
 *
 * 0x143EE419E5A537E6

 * 
 * Perform the longest jump in a land vehicle
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function statGetCurrentJumpDistance(): number {
	const statGetCurrentJumpDistance_result = Citizen.invokeNative<number>('0x143EE419E5A537E6', );
	return statGetCurrentJumpDistance_result;
}