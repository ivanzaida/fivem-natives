import { NightclubMissionEnded } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_NIGHTCLUB_MISSION_ENDED
 *
 * 0xA96F57BEEBDCD7FD

 * 
 * ------------------------------------------------------------------
 * @param {NightclubMissionEnded} data [Ref]
 */
export function playstatsNightclubMissionEnded(data: NightclubMissionEnded /* ptr */): void {
	const playstatsNightclubMissionEnded_result = Citizen.invokeNative<void>('0xA96F57BEEBDCD7FD', data.dataView);
	return playstatsNightclubMissionEnded_result;
}