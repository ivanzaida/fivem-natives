/**
 * NETWORK:NETWORK_IS_TRANSITION_BUSY
 *
 * 0xBEBFA329956ABA4C

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsTransitionBusy(): boolean {
	const networkIsTransitionBusy_result = Citizen.invokeNative<boolean>('0xBEBFA329956ABA4C', );
	return networkIsTransitionBusy_result;
}