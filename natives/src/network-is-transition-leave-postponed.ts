/**
 * NETWORK:NETWORK_IS_TRANSITION_LEAVE_POSTPONED
 *
 * 0x3925DD69CFF095F4

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsTransitionLeavePostponed(): boolean {
	const networkIsTransitionLeavePostponed_result = Citizen.invokeNative<boolean>('0x3925DD69CFF095F4', );
	return networkIsTransitionLeavePostponed_result;
}