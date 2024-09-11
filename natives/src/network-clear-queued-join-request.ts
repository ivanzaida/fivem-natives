/**
 * NETWORK:NETWORK_CLEAR_QUEUED_JOIN_REQUEST
 *
 * 0x6CE421AEDCB62B7E

 * 
 * ------------------------------------------------------------------
 */
export function networkClearQueuedJoinRequest(): void {
	const networkClearQueuedJoinRequest_result = Citizen.invokeNative<void>('0x6CE421AEDCB62B7E', );
	return networkClearQueuedJoinRequest_result;
}