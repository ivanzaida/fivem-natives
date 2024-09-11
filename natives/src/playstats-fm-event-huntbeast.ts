import { FmEventAmbMissionHuntBeast } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_FM_EVENT_HUNTBEAST
 *
 * 0x05FBB9E5C4B211A4

 * 
 * ------------------------------------------------------------------
 * @param {FmEventAmbMissionHuntBeast} data [Ref]
 */
export function playstatsFmEventHuntbeast(data: FmEventAmbMissionHuntBeast /* ptr */): void {
	const playstatsFmEventHuntbeast_result = Citizen.invokeNative<void>('0x05FBB9E5C4B211A4', data.dataView);
	return playstatsFmEventHuntbeast_result;
}