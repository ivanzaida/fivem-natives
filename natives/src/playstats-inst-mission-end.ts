import { InstMissionEnd } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_INST_MISSION_END
 *
 * 0xC11595E99C048D43

 * 
 * ------------------------------------------------------------------
 * @param {InstMissionEnd} data [Ref]
 */
export function playstatsInstMissionEnd(data: InstMissionEnd /* ptr */): void {
	const playstatsInstMissionEnd_result = Citizen.invokeNative<void>('0xC11595E99C048D43', data.dataView);
	return playstatsInstMissionEnd_result;
}