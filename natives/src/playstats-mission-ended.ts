import { MissionEnd } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_MISSION_ENDED
 *
 * 0x1CF82FBB85DD6ABB

 * 
 * ------------------------------------------------------------------
 * @param {MissionEnd} data [Ref]
 */
export function playstatsMissionEnded(data: MissionEnd /* ptr */): void {
	const playstatsMissionEnded_result = Citizen.invokeNative<void>('0x1CF82FBB85DD6ABB', data.dataView);
	return playstatsMissionEnded_result;
}