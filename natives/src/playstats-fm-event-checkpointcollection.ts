import { FmEventAmbMissionCheckpointCollection } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_FM_EVENT_CHECKPOINTCOLLECTION
 *
 * 0x173E12E4AAA563A1

 * 
 * ------------------------------------------------------------------
 * @param {FmEventAmbMissionCheckpointCollection} data [Ref]
 */
export function playstatsFmEventCheckpointcollection(data: FmEventAmbMissionCheckpointCollection /* ptr */): void {
	const playstatsFmEventCheckpointcollection_result = Citizen.invokeNative<void>('0x173E12E4AAA563A1', data.dataView);
	return playstatsFmEventCheckpointcollection_result;
}