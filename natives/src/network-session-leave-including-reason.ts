/**
 * NETWORK:_NETWORK_SESSION_LEAVE_INCLUDING_REASON
 *
 * 0xE0128328CF1FD9F4

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkSessionLeaveIncludingReason(): boolean {
	const networkSessionLeaveIncludingReason_result = Citizen.invokeNative<boolean>('0xE0128328CF1FD9F4', );
	return networkSessionLeaveIncludingReason_result;
}