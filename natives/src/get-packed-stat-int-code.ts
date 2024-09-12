import { EnumToInt } from '@ivanzaida/structures'

/**
 * STATS:GET_PACKED_STAT_INT_CODE
 *
 * 0x03CFFD51CE515454

 * 
 * ------------------------------------------------------------------
 * @param {EnumToInt} stat
 * @param {number} overrideCharSlot
 * @returns {number}  
 */
export function getPackedStatIntCode(stat: EnumToInt, overrideCharSlot: number = 1): number {
	const getPackedStatIntCode_result = Citizen.invokeNative<number>('0x03CFFD51CE515454', stat, overrideCharSlot);
	return getPackedStatIntCode_result;
}