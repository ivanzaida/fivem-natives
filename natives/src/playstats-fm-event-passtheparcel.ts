import { FmEventAmbMissionPassTheParcel } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_FM_EVENT_PASSTHEPARCEL
 *
 * 0x4C70DC8FBB218E4E

 * 
 * ------------------------------------------------------------------
 * @param {FmEventAmbMissionPassTheParcel} data [Ref]
 */
export function playstatsFmEventPasstheparcel(data: FmEventAmbMissionPassTheParcel /* ptr */): void {
	const playstatsFmEventPasstheparcel_result = Citizen.invokeNative<void>('0x4C70DC8FBB218E4E', data.dataView);
	return playstatsFmEventPasstheparcel_result;
}