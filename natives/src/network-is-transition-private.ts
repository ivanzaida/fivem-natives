/**
 * NETWORK:NETWORK_IS_TRANSITION_PRIVATE
 *
 * 0x1ABB34FE0E4550C3

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsTransitionPrivate(): boolean {
	const networkIsTransitionPrivate_result = Citizen.invokeNative<boolean>('0x1ABB34FE0E4550C3', );
	return networkIsTransitionPrivate_result;
}