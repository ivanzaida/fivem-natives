import { IntRef } from '@ivanzaida/structures'

/**
 * CLOCK:GET_UTC_TIME
 *
 * 0x177E5760BD4F49BC

 * 
 * Gets current UTC time
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
export function getUtcTime(year: IntRef /* ptr */, month: IntRef /* ptr */, day: IntRef /* ptr */, hour: IntRef /* ptr */, min: IntRef /* ptr */, sec: IntRef /* ptr */): void {
	const getUtcTime_result = Citizen.invokeNative<void>('0x177E5760BD4F49BC', year.dataView, month.dataView, day.dataView, hour.dataView, min.dataView, sec.dataView);
	return getUtcTime_result;
}