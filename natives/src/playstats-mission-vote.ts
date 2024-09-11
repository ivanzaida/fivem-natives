import { MissionVote } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_MISSION_VOTE
 *
 * 0x81A3B28FEE8BC3E2

 * 
 * ------------------------------------------------------------------
 * @param {MissionVote} data [Ref]
 */
export function playstatsMissionVote(data: MissionVote /* ptr */): void {
	const playstatsMissionVote_result = Citizen.invokeNative<void>('0x81A3B28FEE8BC3E2', data.dataView);
	return playstatsMissionVote_result;
}