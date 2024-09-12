import { FmEventAmbMissionVehicleTarget } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_FM_EVENT_VEHICLETARGET
 *
 * 0x32E12CCFF254D37A

 * 
 * ------------------------------------------------------------------
 * @param {FmEventAmbMissionVehicleTarget} data [Ref]
 */
export function playstatsFmEventVehicletarget(data: FmEventAmbMissionVehicleTarget /* ptr */): void {
	const playstatsFmEventVehicletarget_result = Citizen.invokeNative<void>('0x32E12CCFF254D37A', data.dataView);
	return playstatsFmEventVehicletarget_result;
}