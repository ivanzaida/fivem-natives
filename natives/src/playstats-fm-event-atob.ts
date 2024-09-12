import { FmEventAmbMissionAtob } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_FM_EVENT_ATOB
 *
 * 0xD2041B451EDC1C66

 * 
 * ------------------------------------------------------------------
 * @param {FmEventAmbMissionAtob} data [Ref]
 */
export function playstatsFmEventAtob(data: FmEventAmbMissionAtob /* ptr */): void {
	const playstatsFmEventAtob_result = Citizen.invokeNative<void>('0xD2041B451EDC1C66', data.dataView);
	return playstatsFmEventAtob_result;
}