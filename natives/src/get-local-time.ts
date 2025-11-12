import { IntRef } from '@ivanzaida/structures'

/**
 * CLOCK:GET_LOCAL_TIME
 *
 * 0x2B6A03197E4C7EEF

 * 
 * Gets local system time as year, month, day, hour, minute and second.
 * 
 * Example usage:
 * 
 * int year;
 * int month;
 * int day;
 * int hour;
 * int minute;
 * int second;
 * or use std::tm struct
 * 
 * TIME::GET_LOCAL_TIME(&year, &month, &day, &hour, &minute, &second);
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
export function getLocalTime(year: IntRef /* ptr */, month: IntRef /* ptr */, day: IntRef /* ptr */, hour: IntRef /* ptr */, min: IntRef /* ptr */, sec: IntRef /* ptr */): void {
	const getLocalTime_result = Citizen.invokeNative<void>('0x2B6A03197E4C7EEF', year.dataView, month.dataView, day.dataView, hour.dataView, min.dataView, sec.dataView);
	return getLocalTime_result;
}