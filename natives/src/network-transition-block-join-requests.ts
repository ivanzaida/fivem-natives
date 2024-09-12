/**
 * NETWORK:NETWORK_TRANSITION_BLOCK_JOIN_REQUESTS
 *
 * 0x16CB1C9CEF606A50

 * 
 * ------------------------------------------------------------------
 * @param {boolean} blockJoinRequests
 */
export function networkTransitionBlockJoinRequests(blockJoinRequests: boolean): void {
	const networkTransitionBlockJoinRequests_result = Citizen.invokeNative<void>('0x16CB1C9CEF606A50', blockJoinRequests);
	return networkTransitionBlockJoinRequests_result;
}