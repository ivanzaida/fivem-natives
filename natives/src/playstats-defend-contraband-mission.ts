import { DefendContrabandMission } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_DEFEND_CONTRABAND_MISSION
 *
 * 0x72940F2C0631BBEB

 * 
 * ------------------------------------------------------------------
 * @param {DefendContrabandMission} data [Ref]
 */
export function playstatsDefendContrabandMission(data: DefendContrabandMission /* ptr */): void {
	const playstatsDefendContrabandMission_result = Citizen.invokeNative<void>('0x72940F2C0631BBEB', data.dataView);
	return playstatsDefendContrabandMission_result;
}