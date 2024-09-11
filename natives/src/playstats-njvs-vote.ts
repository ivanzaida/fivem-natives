import { NjvsVote } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_NJVS_VOTE
 *
 * 0x339EF7B9AE008FA8

 * 
 * ------------------------------------------------------------------
 * @param {NjvsVote} data [Ref]
 */
export function playstatsNjvsVote(data: NjvsVote /* ptr */): void {
	const playstatsNjvsVote_result = Citizen.invokeNative<void>('0x339EF7B9AE008FA8', data.dataView);
	return playstatsNjvsVote_result;
}