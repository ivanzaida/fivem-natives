import { Leaderboard2ReadData, GamerHandle, LeaderboardClanIds, Leaderboard2GroupHandle } from '@ivanzaida/structures'

/**
 * STATS:LEADERBOARDS2_READ_BY_ROW
 *
 * 0xA9CDB1E3F0A49883

 * 
 * ------------------------------------------------------------------
 * @param {Leaderboard2ReadData} lbData [Ref]
 * @param {GamerHandle} lbGamerHandleData
 * @param {number} gamerHandles
 * @param {LeaderboardClanIds} lbClanIds
 * @param {number} clanIds
 * @param {Leaderboard2GroupHandle} lbGroups
 * @param {number} numGroups
 * @returns {boolean}  
 */
export function leaderboards2ReadByRow(lbData: Leaderboard2ReadData /* ptr */, lbGamerHandleData: GamerHandle, gamerHandles: number, lbClanIds: LeaderboardClanIds, clanIds: number, lbGroups: Leaderboard2GroupHandle, numGroups: number): boolean {
	const leaderboards2ReadByRow_result = Citizen.invokeNative<boolean>('0xA9CDB1E3F0A49883', lbData.dataView, lbGamerHandleData, gamerHandles, lbClanIds, clanIds, lbGroups, numGroups);
	return leaderboards2ReadByRow_result;
}