import { FmEventAmbMissionHotProperty } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_FM_EVENT_HOTPROPERTY
 *
 * 0xEBB6A19519CEBE34

 * 
 * ------------------------------------------------------------------
 * @param {FmEventAmbMissionHotProperty} data [Ref]
 */
export function playstatsFmEventHotproperty(data: FmEventAmbMissionHotProperty /* ptr */): void {
	const playstatsFmEventHotproperty_result = Citizen.invokeNative<void>('0xEBB6A19519CEBE34', data.dataView);
	return playstatsFmEventHotproperty_result;
}