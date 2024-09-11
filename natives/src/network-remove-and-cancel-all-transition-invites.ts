/**
 * NETWORK:NETWORK_REMOVE_AND_CANCEL_ALL_TRANSITION_INVITES
 *
 * 0x75F142E8DF15F74F

 * 
 * ------------------------------------------------------------------
 */
export function networkRemoveAndCancelAllTransitionInvites(): void {
	const networkRemoveAndCancelAllTransitionInvites_result = Citizen.invokeNative<void>('0x75F142E8DF15F74F', );
	return networkRemoveAndCancelAllTransitionInvites_result;
}