/**
 * NETWORK:NETWORK_SET_TEAM_ONLY_CHAT
 *
 * 0x26E61E347F8C2FB5

 * 
 * Team-only chat is disabled by default.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} teamOnlyChat
 */
export function networkSetTeamOnlyChat(teamOnlyChat: boolean): void {
	const networkSetTeamOnlyChat_result = Citizen.invokeNative<void>('0x26E61E347F8C2FB5', teamOnlyChat);
	return networkSetTeamOnlyChat_result;
}