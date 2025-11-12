import { EnumToInt, EStatsenum } from '@ivanzaida/structures'

/**
 * STATS:GET_PACKED_NG_INT_STAT_KEY
 *
 * 0x6B604293CA9BF4E0

 * 
 * Needs more research. Gets the stat name of a masked int?
 * 
 * section - values used in the decompiled scripts:
 * "_NGPSTAT_INT"
 * "_MP_NGPSTAT_INT"
 * "_MP_LRPSTAT_INT"
 * "_MP_APAPSTAT_INT"
 * "_MP_LR2PSTAT_INT"
 * "_MP_BIKEPSTAT_INT"
 * "_MP_IMPEXPPSTAT_INT"
 * "_MP_GUNRPSTAT_INT"
 * "_NGDLCPSTAT_INT"
 * "_MP_NGDLCPSTAT_INT"
 * "_DLCSMUGCHARPSTAT_INT"
 * "_GANGOPSPSTAT_INT"
 * "_BUSINESSBATPSTAT_INT"
 * "_ARENAWARSPSTAT_INT"
 * "_CASINOPSTAT_INT"
 * "_CASINOHSTPSTAT_INT"
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EnumToInt} stat
 * @param {boolean} singlePlayer
 * @param {boolean} isCharacater
 * @param {number} char
 * @param {string} baseKey
 * @returns {EStatsenum}  
 */
export function getPackedNgIntStatKey(stat: EnumToInt, singlePlayer: boolean, isCharacater: boolean, char: number, baseKey: string): EStatsenum {
	const getPackedNgIntStatKey_result = Citizen.invokeNative<EStatsenum>('0x6B604293CA9BF4E0', stat, singlePlayer, isCharacater, char, baseKey);
	return getPackedNgIntStatKey_result;
}