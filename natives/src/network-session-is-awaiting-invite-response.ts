/**
 * NETWORK:NETWORK_SESSION_IS_AWAITING_INVITE_RESPONSE
 *
 * 0xC05DC36AE101C2BB

 * 
 * Returns TRUE if we have accepted an invite through the platform UI (Guide / XMB) and are
 * now awaiting session details and user confirmation.
 * 
 * Seems to be true while "Getting GTA Online session details" shows up.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkSessionIsAwaitingInviteResponse(): boolean {
	const networkSessionIsAwaitingInviteResponse_result = Citizen.invokeNative<boolean>('0xC05DC36AE101C2BB', );
	return networkSessionIsAwaitingInviteResponse_result;
}