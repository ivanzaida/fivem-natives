/**
 * NETWORK:NETWORK_MARK_AS_PREFERRED_ACTIVITY
 *
 * 0x8C15D9F9A0692305

 * 
 * Transition user data
 * Set the gamer handle of the creator of the mission that the player is
 * currently part of. This will be used for matchmaking (to check if the
 * creator is a friend of searching players)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} isPreferred
 */
export function networkMarkAsPreferredActivity(isPreferred: boolean): void {
	const networkMarkAsPreferredActivity_result = Citizen.invokeNative<void>('0x8C15D9F9A0692305', isPreferred);
	return networkMarkAsPreferredActivity_result;
}