/**
 * NETWORK:NETWORK_IS_TRANSITION_HOST
 *
 * 0xD0A8F3B0E848A00C

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsTransitionHost(): boolean {
	const networkIsTransitionHost_result = Citizen.invokeNative<boolean>('0xD0A8F3B0E848A00C', );
	return networkIsTransitionHost_result;
}