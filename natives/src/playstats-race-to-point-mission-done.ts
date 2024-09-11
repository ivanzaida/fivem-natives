import { RaceToPointInfo } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_RACE_TO_POINT_MISSION_DONE
 *
 * 0xC93D3E846508BAF3

 * 
 * ------------------------------------------------------------------
 * @param {number} ambientMissionId
 * @param {number} xpEarned
 * @param {number} cashEarned
 * @param {RaceToPointInfo} rtopInfo [Ref]
 */
export function playstatsRaceToPointMissionDone(ambientMissionId: number, xpEarned: number, cashEarned: number, rtopInfo: RaceToPointInfo /* ptr */): void {
	const playstatsRaceToPointMissionDone_result = Citizen.invokeNative<void>('0xC93D3E846508BAF3', ambientMissionId, xpEarned, cashEarned, rtopInfo.dataView);
	return playstatsRaceToPointMissionDone_result;
}