/**
 * NETWORK:NETWORK_SESSION_CANCEL_INVITE
 *
 * 0xB1354B4526064BB6

 * 
 * ------------------------------------------------------------------
 */
export function networkSessionCancelInvite(): void {
	const networkSessionCancelInvite_result = Citizen.invokeNative<void>('0xB1354B4526064BB6', );
	return networkSessionCancelInvite_result;
}