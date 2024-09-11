/**
 * NETWORK:NETWORK_SET_SAME_TEAM_AS_LOCAL_PLAYER
 *
 * 0xF97151502670C015

 * 
 * ------------------------------------------------------------------
 * @param {number} player
 * @param {boolean} sameTeam
 * @returns {boolean}  
 */
export function networkSetSameTeamAsLocalPlayer(player: number, sameTeam: boolean): boolean {
	const networkSetSameTeamAsLocalPlayer_result = Citizen.invokeNative<boolean>('0xF97151502670C015', player, sameTeam);
	return networkSetSameTeamAsLocalPlayer_result;
}