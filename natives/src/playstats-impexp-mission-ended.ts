import { ImpexpMissionEnd } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_IMPEXP_MISSION_ENDED
 *
 * 0xA186CBB04F0BBCFE

 * 
 * ------------------------------------------------------------------
 * @param {ImpexpMissionEnd} data [Ref]
 */
export function playstatsImpexpMissionEnded(data: ImpexpMissionEnd /* ptr */): void {
	const playstatsImpexpMissionEnded_result = Citizen.invokeNative<void>('0xA186CBB04F0BBCFE', data.dataView);
	return playstatsImpexpMissionEnded_result;
}