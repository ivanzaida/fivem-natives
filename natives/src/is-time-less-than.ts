import { TimeDatatype } from '@ivanzaida/structures'

/**
 * NETWORK:IS_TIME_LESS_THAN
 *
 * 0xC9FA0059132D5731

 * 
 * Return TRUE if Time1 is less than Time2. FALSE otherwise.
 * 
 * Subtracts the second argument from the first, then returns whether the result is negative.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {TimeDatatype} time1
 * @param {TimeDatatype} time2
 * @returns {boolean}  
 */
export function isTimeLessThan(time1: TimeDatatype, time2: TimeDatatype): boolean {
	const isTimeLessThan_result = Citizen.invokeNative<boolean>('0xC9FA0059132D5731', time1, time2);
	return isTimeLessThan_result;
}