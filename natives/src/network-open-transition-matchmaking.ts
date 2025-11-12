/**
 * NETWORK:NETWORK_OPEN_TRANSITION_MATCHMAKING
 *
 * 0x1729D05F2DC94AF9

 * 
 * These functions allow the session to be added or removed from matchmaking.
 * When removed, the only way into the session is via invite
 * 
 * 
 * ------------------------------------------------------------------
 */
export function networkOpenTransitionMatchmaking(): void {
	const networkOpenTransitionMatchmaking_result = Citizen.invokeNative<void>('0x1729D05F2DC94AF9', );
	return networkOpenTransitionMatchmaking_result;
}