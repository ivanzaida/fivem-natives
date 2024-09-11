/**
 * NETWORK:NETWORK_SESSION_BLOCK_JOIN_REQUESTS
 *
 * 0x82B8FC206B9F77F8

 * 
 * ------------------------------------------------------------------
 * @param {boolean} blockJoinRequests
 */
export function networkSessionBlockJoinRequests(blockJoinRequests: boolean): void {
	const networkSessionBlockJoinRequests_result = Citizen.invokeNative<void>('0x82B8FC206B9F77F8', blockJoinRequests);
	return networkSessionBlockJoinRequests_result;
}