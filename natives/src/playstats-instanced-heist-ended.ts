import { InstancedHeistEnded } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_INSTANCED_HEIST_ENDED
 *
 * 0x371A8C274440C46A

 * 
 * ------------------------------------------------------------------
 * @param {string} creator
 * @param {string} matchId
 * @param {string} playlistid
 * @param {InstancedHeistEnded} data [Ref]
 */
export function playstatsInstancedHeistEnded(creator: string, matchId: string, playlistid: string, data: InstancedHeistEnded /* ptr */): void {
	const playstatsInstancedHeistEnded_result = Citizen.invokeNative<void>('0x371A8C274440C46A', creator, matchId, playlistid, data.dataView);
	return playstatsInstancedHeistEnded_result;
}