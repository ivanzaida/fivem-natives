import { EMonthOfYear } from '@ivanzaida/structures'

/**
 * CLOCK:GET_CLOCK_MONTH
 *
 * 0x8825A6E0A30BDCB8

 * 
 * ------------------------------------------------------------------
 * @returns {EMonthOfYear}  
 */
export function getClockMonth(): EMonthOfYear {
	const getClockMonth_result = Citizen.invokeNative<EMonthOfYear>('0x8825A6E0A30BDCB8', );
	return getClockMonth_result;
}