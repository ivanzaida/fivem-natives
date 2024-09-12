import { LeaderboardPredictionRow } from '@ivanzaida/structures'

/**
 * STATS:LEADERBOARDS2_READ_RANK_PREDICTION
 *
 * 0xAB3A622E50A5CCE2

 * 
 * ------------------------------------------------------------------
 * @param {LeaderboardPredictionRow} original [Ref]
 * @param {LeaderboardPredictionRow} fromMatch [Ref]
 * @param {LeaderboardPredictionRow} outpredicted [Ref]
 * @returns {boolean}  
 */
export function leaderboards2ReadRankPrediction(original: LeaderboardPredictionRow /* ptr */, fromMatch: LeaderboardPredictionRow /* ptr */, outpredicted: LeaderboardPredictionRow /* ptr */): boolean {
	const leaderboards2ReadRankPrediction_result = Citizen.invokeNative<boolean>('0xAB3A622E50A5CCE2', original.dataView, fromMatch.dataView, outpredicted.dataView);
	return leaderboards2ReadRankPrediction_result;
}