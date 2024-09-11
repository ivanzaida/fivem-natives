import { EnumToInt, EStatsenum } from '@ivanzaida/structures'

/**
 * STATS:GET_PACKED_INT_STAT_KEY
 *
 * 0xC80B42F8AEC90782

 * 
 * ------------------------------------------------------------------
 * @param {EnumToInt} stat
 * @param {boolean} singlePlayer
 * @param {boolean} isCharacater
 * @param {number} char
 * @returns {EStatsenum}  
 */
export function getPackedIntStatKey(stat: EnumToInt, singlePlayer: boolean, isCharacater: boolean, char: number): EStatsenum {
	const getPackedIntStatKey_result = Citizen.invokeNative<EStatsenum>('0xC80B42F8AEC90782', stat, singlePlayer, isCharacater, char);
	return getPackedIntStatKey_result;
}