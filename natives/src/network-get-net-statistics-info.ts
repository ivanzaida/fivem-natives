import { NetStatisticsInfo } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_NET_STATISTICS_INFO
 *
 * 0xDF399EF490797927

 * 
 * Does nothing (it's a nullsub).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {NetStatisticsInfo} info [Ref]
 */
export function networkGetNetStatisticsInfo(info: NetStatisticsInfo /* ptr */): void {
	const networkGetNetStatisticsInfo_result = Citizen.invokeNative<void>('0xDF399EF490797927', info.dataView);
	return networkGetNetStatisticsInfo_result;
}