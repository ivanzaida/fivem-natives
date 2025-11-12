import { EStatsenum } from '@ivanzaida/structures'

/**
 * STATS:STAT_SET_CURRENT_POSIX_TIME
 *
 * 0x465DA23A52B88B07

 * 
 * p1 always true.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EStatsenum} keyHash
 * @param {boolean} coderAssert
 * @returns {boolean}  
 */
export function statSetCurrentPosixTime(keyHash: EStatsenum | number, coderAssert: boolean = true): boolean {
	const statSetCurrentPosixTime_result = Citizen.invokeNative<boolean>('0x465DA23A52B88B07', keyHash, coderAssert);
	return statSetCurrentPosixTime_result;
}