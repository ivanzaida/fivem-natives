import { LeaderboardRowData } from '@ivanzaida/structures'

/**
 * STATS:LEADERBOARDS2_READ_GET_ROW_DATA_INFO
 *
 * 0xA8236CAFF38CEF7C

 * 
 * ------------------------------------------------------------------
 * @param {number} row
 * @param {LeaderboardRowData} lbReadData [Ref]
 * @returns {boolean}  
 */
export function leaderboards2ReadGetRowDataInfo(row: number, lbReadData: LeaderboardRowData /* ptr */): boolean {
	const leaderboards2ReadGetRowDataInfo_result = Citizen.invokeNative<boolean>('0xA8236CAFF38CEF7C', row, lbReadData.dataView);
	return leaderboards2ReadGetRowDataInfo_result;
}