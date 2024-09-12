import { Leaderboard2ReadData, Leaderboard2GroupHandle } from '@ivanzaida/structures'

/**
 * STATS:LEADERBOARDS2_READ_FRIENDS_BY_ROW
 *
 * 0x918B101666F9CB83

 * 
 * ------------------------------------------------------------------
 * @param {Leaderboard2ReadData} lbData [Ref]
 * @param {Leaderboard2GroupHandle} lbGroups
 * @param {number} numGroups
 * @param {boolean} includeLocalPlayer
 * @param {number} friendStart
 * @param {number} maxNumFriends
 * @returns {boolean}  
 */
export function leaderboards2ReadFriendsByRow(lbData: Leaderboard2ReadData /* ptr */, lbGroups: Leaderboard2GroupHandle, numGroups: number, includeLocalPlayer: boolean, friendStart: number = 0, maxNumFriends: number = 50): boolean {
	const leaderboards2ReadFriendsByRow_result = Citizen.invokeNative<boolean>('0x918B101666F9CB83', lbData.dataView, lbGroups, numGroups, includeLocalPlayer, friendStart, maxNumFriends);
	return leaderboards2ReadFriendsByRow_result;
}