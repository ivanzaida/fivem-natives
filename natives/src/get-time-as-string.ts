import { TimeDatatype } from '@ivanzaida/structures'

/**
 * NETWORK:GET_TIME_AS_STRING
 *
 * 0xF55707B152A1A749

 * 
 * Return time formatted in h:mm:ss.ms
 * 
 * 
 * ------------------------------------------------------------------
 * @param {TimeDatatype} time
 * @returns {string}  
 */
export function getTimeAsString(time: TimeDatatype): string {
	const getTimeAsString_result = Citizen.invokeNative<string>('0xF55707B152A1A749', time);
	return getTimeAsString_result;
}