/**
 * NETWORK:NETWORK_REMOVE_ALL_QUEUED_JOIN_REQUESTS
 *
 * 0x180F569AF7F16BB2

 * 
 * ------------------------------------------------------------------
 */
export function networkRemoveAllQueuedJoinRequests(): void {
	const networkRemoveAllQueuedJoinRequests_result = Citizen.invokeNative<void>('0x180F569AF7F16BB2', );
	return networkRemoveAllQueuedJoinRequests_result;
}