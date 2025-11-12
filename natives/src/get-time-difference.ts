import { TimeDatatype } from '@ivanzaida/structures'

/**
 * NETWORK:GET_TIME_DIFFERENCE
 *
 * 0x775142054EC39277

 * 
 * Return INT representing time between Time1 and Time2
 * 
 * Subtracts the second argument from the first.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {TimeDatatype} time1
 * @param {TimeDatatype} time2
 * @returns {number}  
 */
export function getTimeDifference(time1: TimeDatatype, time2: TimeDatatype): number {
	const getTimeDifference_result = Citizen.invokeNative<number>('0x775142054EC39277', time1, time2);
	return getTimeDifference_result;
}