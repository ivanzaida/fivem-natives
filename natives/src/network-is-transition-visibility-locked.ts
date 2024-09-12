/**
 * NETWORK:NETWORK_IS_TRANSITION_VISIBILITY_LOCKED
 *
 * 0x4AAE1A24667185BB

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsTransitionVisibilityLocked(): boolean {
	const networkIsTransitionVisibilityLocked_result = Citizen.invokeNative<boolean>('0x4AAE1A24667185BB', );
	return networkIsTransitionVisibilityLocked_result;
}