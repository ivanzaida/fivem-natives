/**
 * STATS:STAT_GET_CURRENT_FRONT_WHEEL_DISTANCE
 *
 * 0xFF41A17ED9059E7D

 * 
 * Perform the longest stoppie on a motorcycle
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function statGetCurrentFrontWheelDistance(): number {
	const statGetCurrentFrontWheelDistance_result = Citizen.invokeNative<number>('0xFF41A17ED9059E7D', );
	return statGetCurrentFrontWheelDistance_result;
}