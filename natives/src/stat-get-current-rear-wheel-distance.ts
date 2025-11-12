/**
 * STATS:STAT_GET_CURRENT_REAR_WHEEL_DISTANCE
 *
 * 0x91F40F276617074F

 * 
 * Perform the longest wheelie on a motorcycle
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function statGetCurrentRearWheelDistance(): number {
	const statGetCurrentRearWheelDistance_result = Citizen.invokeNative<number>('0x91F40F276617074F', );
	return statGetCurrentRearWheelDistance_result;
}