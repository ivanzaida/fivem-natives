import { EnumToInt } from '@ivanzaida/structures'

/**
 * STATS:GET_PACKED_STAT_BOOL_CODE
 *
 * 0xA6D3C21763E25496

 * 
 * NEW NATIVE HELPER FUNCTIONS TO MANIPULATE PACKED STATS.
 * Only use 'overrideCharSlot' if you want to override using the current selected character. Make sure
 * its a correct character index. 0 to 2 on SP and 0 to 1 on MP.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EnumToInt} stat
 * @param {number} overrideCharSlot
 * @returns {boolean}  
 */
export function getPackedStatBoolCode(stat: EnumToInt, overrideCharSlot: number = 1): boolean {
	const getPackedStatBoolCode_result = Citizen.invokeNative<boolean>('0xA6D3C21763E25496', stat, overrideCharSlot);
	return getPackedStatBoolCode_result;
}