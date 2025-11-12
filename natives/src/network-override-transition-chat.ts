/**
 * NETWORK:NETWORK_OVERRIDE_TRANSITION_CHAT
 *
 * 0xDF204CDF19B1E09E

 * 
 * Override transition chat restrictions that normally separate the main GTAO session from
 * the transition players. This should be set when going to a new corona from an activity
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} override
 */
export function networkOverrideTransitionChat(override: boolean): void {
	const networkOverrideTransitionChat_result = Citizen.invokeNative<void>('0xDF204CDF19B1E09E', override);
	return networkOverrideTransitionChat_result;
}