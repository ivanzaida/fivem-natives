/**
 * NETWORK:NETWORK_IS_CONNETED_TO_NP_PRESENCE
 *
 * 0x8827319E5D2F9C68

 * 
 * Returns TRUE if the player is connected to either PSN or RPresence
 * When FALSE, we can safely assume an internet connection has been lost. Use this when handling
 * connection change events to determine if the user has gone offline due to a sign out or net connection loss.
 * 
 * This function is hard-coded to always return 1.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsConnetedToNpPresence(): boolean {
	const networkIsConnetedToNpPresence_result = Citizen.invokeNative<boolean>('0x8827319E5D2F9C68', );
	return networkIsConnetedToNpPresence_result;
}