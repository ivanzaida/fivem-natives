import { EnumToInt } from '@ivanzaida/structures'

/**
 * STATS:SET_PACKED_STAT_INT_CODE
 *
 * 0x0F575D68F532124C

 * 
 * ------------------------------------------------------------------
 * @param {EnumToInt} stat
 * @param {number} value
 * @param {number} overrideCharSlot
 */
export function setPackedStatIntCode(stat: EnumToInt, value: number, overrideCharSlot: number = 1): void {
	const setPackedStatIntCode_result = Citizen.invokeNative<void>('0x0F575D68F532124C', stat, value, overrideCharSlot);
	return setPackedStatIntCode_result;
}