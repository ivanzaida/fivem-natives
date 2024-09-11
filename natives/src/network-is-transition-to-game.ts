/**
 * NETWORK:NETWORK_IS_TRANSITION_TO_GAME
 *
 * 0x38D0A140AB80B25C

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsTransitionToGame(): boolean {
	const networkIsTransitionToGame_result = Citizen.invokeNative<boolean>('0x38D0A140AB80B25C', );
	return networkIsTransitionToGame_result;
}