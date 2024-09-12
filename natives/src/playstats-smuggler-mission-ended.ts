import { SmugglerMissionEnd } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_SMUGGLER_MISSION_ENDED
 *
 * 0x1325E9C90489B378

 * 
 * ------------------------------------------------------------------
 * @param {SmugglerMissionEnd} data [Ref]
 */
export function playstatsSmugglerMissionEnded(data: SmugglerMissionEnd /* ptr */): void {
	const playstatsSmugglerMissionEnded_result = Citizen.invokeNative<void>('0x1325E9C90489B378', data.dataView);
	return playstatsSmugglerMissionEnded_result;
}