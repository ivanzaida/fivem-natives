import { EStatsenum } from '@ivanzaida/structures'

/**
 * STATS:STAT_GET_NUMBER_OF_DAYS
 *
 * 0x4F256B9F00ACB695

 * 
 * This command can be used on stats that store timer values in milliseconds (like TOTAL_PLAYING_TIME) but their types are
 * are too big to be converted to hours in script.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EStatsenum} keyHash
 * @returns {number}  
 */
export function statGetNumberOfDays(keyHash: EStatsenum | number): number {
	const statGetNumberOfDays_result = Citizen.invokeNative<number>('0x4F256B9F00ACB695', keyHash);
	return statGetNumberOfDays_result;
}