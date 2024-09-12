/**
 * NETWORK:NETWORK_IS_TRANSITION_MATCHMAKING
 *
 * 0xF34D7A660FA4A707

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsTransitionMatchmaking(): boolean {
	const networkIsTransitionMatchmaking_result = Citizen.invokeNative<boolean>('0xF34D7A660FA4A707', );
	return networkIsTransitionMatchmaking_result;
}