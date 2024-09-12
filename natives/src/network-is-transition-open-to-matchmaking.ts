/**
 * NETWORK:NETWORK_IS_TRANSITION_OPEN_TO_MATCHMAKING
 *
 * 0x15968F67A02D1437

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsTransitionOpenToMatchmaking(): boolean {
	const networkIsTransitionOpenToMatchmaking_result = Citizen.invokeNative<boolean>('0x15968F67A02D1437', );
	return networkIsTransitionOpenToMatchmaking_result;
}