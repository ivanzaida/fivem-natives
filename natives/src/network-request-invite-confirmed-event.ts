/**
 * NETWORK:NETWORK_REQUEST_INVITE_CONFIRMED_EVENT
 *
 * 0x4AA344248B02BD35

 * 
 * Triggers a CEventNetworkInviteConfirmed event
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkRequestInviteConfirmedEvent(): boolean {
	const networkRequestInviteConfirmedEvent_result = Citizen.invokeNative<boolean>('0x4AA344248B02BD35', );
	return networkRequestInviteConfirmedEvent_result;
}