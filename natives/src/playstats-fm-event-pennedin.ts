import { FmEventAmbientMission } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_FM_EVENT_PENNEDIN
 *
 * 0xC98FBB17B1EC9BA1

 * 
 * ------------------------------------------------------------------
 * @param {FmEventAmbientMission} data [Ref]
 */
export function playstatsFmEventPennedin(data: FmEventAmbientMission /* ptr */): void {
	const playstatsFmEventPennedin_result = Citizen.invokeNative<void>('0xC98FBB17B1EC9BA1', data.dataView);
	return playstatsFmEventPennedin_result;
}