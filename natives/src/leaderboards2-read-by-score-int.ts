import { Leaderboard2ReadData } from '@ivanzaida/structures'

/**
 * STATS:LEADERBOARDS2_READ_BY_SCORE_INT
 *
 * 0x9A9BC0C3D955A625

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
export function leaderboards2ReadByScoreInt(lbData: Leaderboard2ReadData /* ptr */, pivotScore: number, numRows: number): boolean {
	const leaderboards2ReadByScoreInt_result = Citizen.invokeNative<boolean>('0x9A9BC0C3D955A625', lbData.dataView, pivotScore, numRows);
	return leaderboards2ReadByScoreInt_result;
}