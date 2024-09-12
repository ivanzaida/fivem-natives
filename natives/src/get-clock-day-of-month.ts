/**
 * CLOCK:GET_CLOCK_DAY_OF_MONTH
 *
 * 0xB12880C92EA6EE15

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getClockDayOfMonth(): number {
	const getClockDayOfMonth_result = Citizen.invokeNative<number>('0xB12880C92EA6EE15', );
	return getClockDayOfMonth_result;
}