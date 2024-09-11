import { LeaderboardReadInfo } from '@ivanzaida/structures'

/**
 * STATS:LEADERBOARDS2_READ_GET_ROW_DATA_START
 *
 * 0xF685596DB2F81084

 * 
 * ------------------------------------------------------------------
 * @param {LeaderboardReadInfo} info [Ref]
 * @returns {boolean}  
 */
export function leaderboards2ReadGetRowDataStart(info: LeaderboardReadInfo /* ptr */): boolean {
	const leaderboards2ReadGetRowDataStart_result = Citizen.invokeNative<boolean>('0xF685596DB2F81084', info.dataView);
	return leaderboards2ReadGetRowDataStart_result;
}