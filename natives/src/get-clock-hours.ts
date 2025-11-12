/**
 * CLOCK:GET_CLOCK_HOURS
 *
 * 0x5295501D0862870D

 * 
 * Gets the current ingame hour, expressed without zeros. (09:34 will be represented as 9)
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getClockHours(): number {
	const getClockHours_result = Citizen.invokeNative<number>('0x5295501D0862870D', );
	return getClockHours_result;
}