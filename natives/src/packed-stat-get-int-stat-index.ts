import { EnumToInt } from '@ivanzaida/structures'

/**
 * STATS:PACKED_STAT_GET_INT_STAT_INDEX
 *
 * 0xC24FF3ECDBA75CAC

 * 
 * Needs more research. Possibly used to calculate the "mask" when calling "STAT_SET_MASKED_INT"?
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EnumToInt} stat
 * @returns {number}  
 */
export function packedStatGetIntStatIndex(stat: EnumToInt): number {
	const packedStatGetIntStatIndex_result = Citizen.invokeNative<number>('0xC24FF3ECDBA75CAC', stat);
	return packedStatGetIntStatIndex_result;
}