/**
 * NETWORK:NETWORK_SET_IGNORE_SPECTATOR_CHAT_LIMITS_SAME_TEAM
 *
 * 0xDB9D60DE4E690B9C

 * 
 * ------------------------------------------------------------------
 * @param {boolean} enable
 */
export function networkSetIgnoreSpectatorChatLimitsSameTeam(enable: boolean): void {
	const networkSetIgnoreSpectatorChatLimitsSameTeam_result = Citizen.invokeNative<void>('0xDB9D60DE4E690B9C', enable);
	return networkSetIgnoreSpectatorChatLimitsSameTeam_result;
}