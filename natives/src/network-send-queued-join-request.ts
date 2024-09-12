/**
 * NETWORK:NETWORK_SEND_QUEUED_JOIN_REQUEST
 *
 * 0x2D1FE8FD7BC2BF03

 * 
 * ------------------------------------------------------------------
 */
export function networkSendQueuedJoinRequest(): void {
	const networkSendQueuedJoinRequest_result = Citizen.invokeNative<void>('0x2D1FE8FD7BC2BF03', );
	return networkSendQueuedJoinRequest_result;
}