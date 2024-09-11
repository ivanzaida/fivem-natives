/**
 * NETWORK:CLOUD_HAS_REQUEST_COMPLETED
 *
 * 0x0F61191B654874D0

 * 
 * ------------------------------------------------------------------
 * @param {number} requestID
 * @returns {boolean}  
 */
export function cloudHasRequestCompleted(requestID: number): boolean {
	const cloudHasRequestCompleted_result = Citizen.invokeNative<boolean>('0x0F61191B654874D0', requestID);
	return cloudHasRequestCompleted_result;
}