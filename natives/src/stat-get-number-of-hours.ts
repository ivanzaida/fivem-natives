import { EStatsenum } from '@ivanzaida/structures'

/**
 * STATS:STAT_GET_NUMBER_OF_HOURS
 *
 * 0xDF21396D0886D8F7

 * 
 * ------------------------------------------------------------------
 * @param {EStatsenum} keyHash
 * @returns {number}  
 */
export function statGetNumberOfHours(keyHash: EStatsenum | number): number {
	const statGetNumberOfHours_result = Citizen.invokeNative<number>('0xDF21396D0886D8F7', keyHash);
	return statGetNumberOfHours_result;
}