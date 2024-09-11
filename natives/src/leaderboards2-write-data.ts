import { LeaderboardUpdateData } from '@ivanzaida/structures'

/**
 * STATS:LEADERBOARDS2_WRITE_DATA
 *
 * 0x41B592D7008A639E

 * 
 * ------------------------------------------------------------------
 * @param {LeaderboardUpdateData} lbData [Ref]
 * @returns {boolean}  
 */
export function leaderboards2WriteData(lbData: LeaderboardUpdateData /* ptr */): boolean {
	const leaderboards2WriteData_result = Citizen.invokeNative<boolean>('0x41B592D7008A639E', lbData.dataView);
	return leaderboards2WriteData_result;
}