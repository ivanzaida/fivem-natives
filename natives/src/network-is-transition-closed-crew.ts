/**
 * NETWORK:NETWORK_IS_TRANSITION_CLOSED_CREW
 *
 * 0x2D7D4A7EDC2C2543

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsTransitionClosedCrew(): boolean {
	const networkIsTransitionClosedCrew_result = Citizen.invokeNative<boolean>('0x2D7D4A7EDC2C2543', );
	return networkIsTransitionClosedCrew_result;
}