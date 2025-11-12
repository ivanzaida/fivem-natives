import { IntRef } from '@ivanzaida/structures'

/**
 * CLOCK:GET_POSIX_TIME
 *
 * 0x23CB97F04154A594

 * 
 * Get a reliable time on xbox/ps3. Expressed as UTC (or GMT timezone).
 * year - years since 1900
 * mon  - months since January	 (1-12)
 * day  - day of the month	     (1-31)
 * hour - hours since midnight	 (0-23)
 * min  - minutes after the hour   (1-60)
 * sec  - seconds after the minute (0-61)
 * 
 * Gets system time as year, month, day, hour, minute and second.
 * 
 * Example usage:
 * 
 *     int year;
 *  int month;
 *     int day;
 *   int hour;
 *  int minute;
 *    int second;
 * 
 *  TIME::GET_POSIX_TIME(&year, &month, &day, &hour, &minute, &second);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {IntRef} year [Ref]
 * @param {IntRef} month [Ref]
 * @param {IntRef} day [Ref]
 * @param {IntRef} hour [Ref]
 * @param {IntRef} min [Ref]
 * @param {IntRef} sec [Ref]
 */
export function getPosixTime(year: IntRef /* ptr */, month: IntRef /* ptr */, day: IntRef /* ptr */, hour: IntRef /* ptr */, min: IntRef /* ptr */, sec: IntRef /* ptr */): void {
	const getPosixTime_result = Citizen.invokeNative<void>('0x23CB97F04154A594', year.dataView, month.dataView, day.dataView, hour.dataView, min.dataView, sec.dataView);
	return getPosixTime_result;
}