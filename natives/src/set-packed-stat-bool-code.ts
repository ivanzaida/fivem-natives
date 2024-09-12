import { EnumToInt } from '@ivanzaida/structures'

/**
 * STATS:SET_PACKED_STAT_BOOL_CODE
 *
 * 0xA595AA1819B05EA0

 * 
 * ------------------------------------------------------------------
 * @param {EnumToInt} stat
 * @param {boolean} value
 * @param {number} overrideCharSlot
 */
export function setPackedStatBoolCode(stat: EnumToInt, value: boolean, overrideCharSlot: number = 1): void {
	const setPackedStatBoolCode_result = Citizen.invokeNative<void>('0xA595AA1819B05EA0', stat, value, overrideCharSlot);
	return setPackedStatBoolCode_result;
}