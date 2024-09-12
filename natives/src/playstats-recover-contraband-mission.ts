import { RecoverContrabandMission } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_RECOVER_CONTRABAND_MISSION
 *
 * 0xC769CAC3FD631439

 * 
 * ------------------------------------------------------------------
 * @param {RecoverContrabandMission} data [Ref]
 */
export function playstatsRecoverContrabandMission(data: RecoverContrabandMission /* ptr */): void {
	const playstatsRecoverContrabandMission_result = Citizen.invokeNative<void>('0xC769CAC3FD631439', data.dataView);
	return playstatsRecoverContrabandMission_result;
}