import { TimeDatatype } from '@ivanzaida/structures'

/**
 * NETWORK:GET_TIME_OFFSET
 *
 * 0xAD5B43C219C4CB92

 * 
 * Returns a time datatype variable offset by Offset milliseconds
 * 
 * Adds the first argument to the second.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {TimeDatatype} time1
 * @param {number} offset
 * @returns {TimeDatatype}  
 */
export function getTimeOffset(time1: TimeDatatype, offset: number): TimeDatatype {
	const getTimeOffset_result = Citizen.invokeNative<TimeDatatype>('0xAD5B43C219C4CB92', time1, offset);
	return getTimeOffset_result;
}