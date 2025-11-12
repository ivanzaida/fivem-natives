/**
 * STATS:STAT_GET_CURRENT_SPEED
 *
 * 0xC5EF85C408571EAF

 * 
 * Achieve the highest speed in a land vehicle
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function statGetCurrentSpeed(): number {
	const statGetCurrentSpeed_result = Citizen.invokeNative<number>('0xC5EF85C408571EAF', );
	return statGetCurrentSpeed_result;
}