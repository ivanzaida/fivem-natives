/**
 * NETWORK:NETWORK_IS_TRANSITION_STARTED
 *
 * 0x46AEFA18F83E2E9B

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsTransitionStarted(): boolean {
	const networkIsTransitionStarted_result = Citizen.invokeNative<boolean>('0x46AEFA18F83E2E9B', );
	return networkIsTransitionStarted_result;
}