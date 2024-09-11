import { FmEventAmbMissionDeadDrop } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_FM_EVENT_DEADDROP
 *
 * 0x41A58057D21172EA

 * 
 * ------------------------------------------------------------------
 * @param {FmEventAmbMissionDeadDrop} data [Ref]
 */
export function playstatsFmEventDeaddrop(data: FmEventAmbMissionDeadDrop /* ptr */): void {
	const playstatsFmEventDeaddrop_result = Citizen.invokeNative<void>('0x41A58057D21172EA', data.dataView);
	return playstatsFmEventDeaddrop_result;
}