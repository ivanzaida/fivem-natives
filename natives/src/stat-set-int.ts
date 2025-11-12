import { EStatsenum } from '@ivanzaida/structures'

/**
 * STATS:STAT_SET_INT
 *
 * 0x1164A75E490C27B6

 * 
 * Example:
 *  STATS::STAT_SET_INT(MISC::GET_HASH_KEY("MPPLY_KILLS_PLAYERS"), 1337, true);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EStatsenum} keyHash
 * @param {number} data
 * @param {boolean} coderAssert
 * @returns {boolean}  
 */
export function statSetInt(keyHash: EStatsenum | number, data: number, coderAssert: boolean = true): boolean {
	const statSetInt_result = Citizen.invokeNative<boolean>('0x1164A75E490C27B6', keyHash, data, coderAssert);
	return statSetInt_result;
}