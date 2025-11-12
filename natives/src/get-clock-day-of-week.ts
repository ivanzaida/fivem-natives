import { EDayOfWeek } from '@ivanzaida/structures'

/**
 * CLOCK:GET_CLOCK_DAY_OF_WEEK
 *
 * 0xDDA4278694CAA369

 * 
 * Gets the current day of the week.
 * 
 * 0: Sunday
 * 1: Monday
 * 2: Tuesday
 * 3: Wednesday
 * 4: Thursday
 * 5: Friday
 * 6: Saturday
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {EDayOfWeek}  
 */
export function getClockDayOfWeek(): EDayOfWeek {
	const getClockDayOfWeek_result = Citizen.invokeNative<EDayOfWeek>('0xDDA4278694CAA369', );
	return getClockDayOfWeek_result;
}