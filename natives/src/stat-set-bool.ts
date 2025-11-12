import { EStatsenum } from '@ivanzaida/structures'

/**
 * STATS:STAT_SET_BOOL
 *
 * 0xF1D0B0CE940F620D

 * 
 * Example:
 *  STATS::STAT_SET_BOOL(MISC::GET_HASH_KEY("MPPLY_MELEECHLENGECOMPLETED"), trur, true);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EStatsenum} keyHash
 * @param {boolean} data
 * @param {boolean} coderAssert
 * @returns {boolean}  
 */
export function statSetBool(keyHash: EStatsenum | number, data: boolean, coderAssert: boolean = true): boolean {
	const statSetBool_result = Citizen.invokeNative<boolean>('0xF1D0B0CE940F620D', keyHash, data, coderAssert);
	return statSetBool_result;
}