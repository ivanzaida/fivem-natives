import { Leaderboard2ReadData } from '@ivanzaida/structures'

/**
 * STATS:LEADERBOARDS2_READ_BY_RANK
 *
 * 0xCB7FE0F272C209AB

 * 
 * ------------------------------------------------------------------
 * @param {Leaderboard2ReadData} lbData [Ref]
 * @param {number} rankStart
 * @param {number} numRows
 * @returns {boolean}  
 */
export function leaderboards2ReadByRank(lbData: Leaderboard2ReadData /* ptr */, rankStart: number, numRows: number): boolean {
	const leaderboards2ReadByRank_result = Citizen.invokeNative<boolean>('0xCB7FE0F272C209AB', lbData.dataView, rankStart, numRows);
	return leaderboards2ReadByRank_result;
}