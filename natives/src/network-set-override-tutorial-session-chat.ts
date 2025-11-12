/**
 * NETWORK:NETWORK_SET_OVERRIDE_TUTORIAL_SESSION_CHAT
 *
 * 0x13D997FE205FD704

 * 
 * By default, players in different tutorial sessions cannot chat. This allows that to be overridden.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} override
 */
export function networkSetOverrideTutorialSessionChat(override: boolean): void {
	const networkSetOverrideTutorialSessionChat_result = Citizen.invokeNative<void>('0x13D997FE205FD704', override);
	return networkSetOverrideTutorialSessionChat_result;
}