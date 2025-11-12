import { TimeDatatype } from '@ivanzaida/structures'

/**
 * NETWORK:IS_TIME_MORE_THAN
 *
 * 0xDBA141080166EAA2

 * 
 * Return TRUE if Time1 is greater than Time2. FALSE otherwise.
 * 
 * Subtracts the first argument from the second, then returns whether the result is negative.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {TimeDatatype} time1
 * @param {TimeDatatype} time2
 * @returns {boolean}  
 */
export function isTimeMoreThan(time1: TimeDatatype, time2: TimeDatatype): boolean {
	const isTimeMoreThan_result = Citizen.invokeNative<boolean>('0xDBA141080166EAA2', time1, time2);
	return isTimeMoreThan_result;
}