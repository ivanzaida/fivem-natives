/**
 * NETWORK:NETWORK_SET_SPECTATOR_TO_NON_SPECTATOR_TEXT_CHAT
 *
 * 0xA25C1B5218833F4E

 * 
 * ------------------------------------------------------------------
 * @param {boolean} isEnabled
 */
export function networkSetSpectatorToNonSpectatorTextChat(isEnabled: boolean): void {
	const networkSetSpectatorToNonSpectatorTextChat_result = Citizen.invokeNative<void>('0xA25C1B5218833F4E', isEnabled);
	return networkSetSpectatorToNonSpectatorTextChat_result;
}