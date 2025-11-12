import { MatchStartInfo } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_MATCH_STARTED
 *
 * 0x6DA5DF2F00E56237

 * 
 * Tells the PlayStats that a match has started.
 * The host needs to call PLAYSTATS_CREATE_MATCH_HISTORY_ID and share the values
 * of matchHistoryIdA & matchHistoryIdB among all match participants.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} matchCreator
 * @param {string} uniqueMatchId
 * @param {MatchStartInfo} info [Ref]
 */
export function playstatsMatchStarted(matchCreator: string, uniqueMatchId: string, info: MatchStartInfo /* ptr */): void {
	const playstatsMatchStarted_result = Citizen.invokeNative<void>('0x6DA5DF2F00E56237', matchCreator, uniqueMatchId, info.dataView);
	return playstatsMatchStarted_result;
}