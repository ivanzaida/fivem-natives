import { IntRef } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_CREATE_MATCH_HISTORY_ID_2
 *
 * 0x0189E96FAC892B16

 * 
 * ------------------------------------------------------------------
 * @param {IntRef} hashedMac [Ref]
 * @param {IntRef} posixTime [Ref]
 * @returns {boolean}  
 */
export function playstatsCreateMatchHistoryId_2(hashedMac: IntRef /* ptr */, posixTime: IntRef /* ptr */): boolean {
	const playstatsCreateMatchHistoryId_2_result = Citizen.invokeNative<boolean>('0x0189E96FAC892B16', hashedMac.dataView, posixTime.dataView);
	return playstatsCreateMatchHistoryId_2_result;
}