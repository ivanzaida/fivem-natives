import { FmEventAmbMissionCompetitiveUrbanWarfare } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_FM_EVENT_COMPETITIVEURBANWARFARE
 *
 * 0xEC859204FA292EDF

 * 
 * ------------------------------------------------------------------
 * @param {FmEventAmbMissionCompetitiveUrbanWarfare} data [Ref]
 */
export function playstatsFmEventCompetitiveurbanwarfare(data: FmEventAmbMissionCompetitiveUrbanWarfare /* ptr */): void {
	const playstatsFmEventCompetitiveurbanwarfare_result = Citizen.invokeNative<void>('0xEC859204FA292EDF', data.dataView);
	return playstatsFmEventCompetitiveurbanwarfare_result;
}