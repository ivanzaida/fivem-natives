import { EStatsenum } from '@ivanzaida/structures'

/**
 * STATS:STAT_GET_NUMBER_OF_MINUTES
 *
 * 0xE44C8536D6F264FC

 * 
 * ------------------------------------------------------------------
 * @param {EStatsenum} keyHash
 * @returns {number}  
 */
export function statGetNumberOfMinutes(keyHash: EStatsenum | number): number {
	const statGetNumberOfMinutes_result = Citizen.invokeNative<number>('0xE44C8536D6F264FC', keyHash);
	return statGetNumberOfMinutes_result;
}