/**
 * NETWORK:NETWORK_SESSION_FORCE_CANCEL_INVITE
 *
 * 0x700F61510EE70767

 * 
 * ------------------------------------------------------------------
 */
export function networkSessionForceCancelInvite(): void {
	const networkSessionForceCancelInvite_result = Citizen.invokeNative<void>('0x700F61510EE70767', );
	return networkSessionForceCancelInvite_result;
}