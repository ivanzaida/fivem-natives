import { Leaderboard2ReadData } from '@ivanzaida/structures'

/**
 * STATS:LEADERBOARDS2_READ_BY_SCORE_FLOAT
 *
 * 0x40ED52FB5B42D9FB

 * 
 * Reads leaderboard rows around a "pivot" score.  The score is
 * compared against the ranking column of the leaderboard.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {Leaderboard2ReadData} lbData [Ref]
 * @param {number} pivotScore
 * @param {number} numRows
 * @returns {boolean}  
 */
export function leaderboards2ReadByScoreFloat(lbData: Leaderboard2ReadData /* ptr */, pivotScore: number, numRows: number): boolean {
	const leaderboards2ReadByScoreFloat_result = Citizen.invokeNative<boolean>('0x40ED52FB5B42D9FB', lbData.dataView, pivotScore, numRows);
	return leaderboards2ReadByScoreFloat_result;
}