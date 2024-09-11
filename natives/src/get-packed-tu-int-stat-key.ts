import { EnumToInt, EStatsenum } from '@ivanzaida/structures'

/**
 * STATS:GET_PACKED_TU_INT_STAT_KEY
 *
 * 0x443206C9783C69F1

 * 
 * ------------------------------------------------------------------
 * @param {EnumToInt} stat
 * @param {boolean} singlePlayer
 * @param {boolean} isCharacater
 * @param {number} char
 * @returns {EStatsenum}  
 */
export function getPackedTuIntStatKey(stat: EnumToInt, singlePlayer: boolean, isCharacater: boolean, char: number): EStatsenum {
	const getPackedTuIntStatKey_result = Citizen.invokeNative<EStatsenum>('0x443206C9783C69F1', stat, singlePlayer, isCharacater, char);
	return getPackedTuIntStatKey_result;
}