/**
 * NETWORK:NETWORK_LEAVE_TRANSITION
 *
 * 0x2B0E6E483C2214A4

 * 
 * This leaves the transition session. This should be called if the player
 * wants to leave the transition before it is launched
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkLeaveTransition(): boolean {
	const networkLeaveTransition_result = Citizen.invokeNative<boolean>('0x2B0E6E483C2214A4', );
	return networkLeaveTransition_result;
}