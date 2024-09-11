/**
 * NETWORK:NETWORK_REMOVE_AND_CANCEL_ALL_INVITES
 *
 * 0x81C066ED25825D02

 * 
 * ------------------------------------------------------------------
 */
export function networkRemoveAndCancelAllInvites(): void {
	const networkRemoveAndCancelAllInvites_result = Citizen.invokeNative<void>('0x81C066ED25825D02', );
	return networkRemoveAndCancelAllInvites_result;
}