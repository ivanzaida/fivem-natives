import { TimeDatatype } from '@ivanzaida/structures'

/**
 * NETWORK:IS_TIME_EQUAL_TO
 *
 * 0xCFF17EF1F3F6FF43

 * 
 * Return TRUE if Time1 is equal to Time2. FALSE otherwise.
 * 
 * Returns true if the two times are equal; otherwise returns false.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {TimeDatatype} time1
 * @param {TimeDatatype} time2
 * @returns {boolean}  
 */
export function isTimeEqualTo(time1: TimeDatatype, time2: TimeDatatype): boolean {
	const isTimeEqualTo_result = Citizen.invokeNative<boolean>('0xCFF17EF1F3F6FF43', time1, time2);
	return isTimeEqualTo_result;
}