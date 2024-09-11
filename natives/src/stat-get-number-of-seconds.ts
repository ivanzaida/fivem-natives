import { EStatsenum } from '@ivanzaida/structures'

/**
 * STATS:STAT_GET_NUMBER_OF_SECONDS
 *
 * 0x77A7B5685F038D01

 * 
 * ------------------------------------------------------------------
 * @param {EStatsenum} keyHash
 * @returns {number}  
 */
export function statGetNumberOfSeconds(keyHash: EStatsenum | number): number {
	const statGetNumberOfSeconds_result = Citizen.invokeNative<number>('0x77A7B5685F038D01', keyHash);
	return statGetNumberOfSeconds_result;
}