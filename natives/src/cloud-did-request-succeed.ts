/**
 * NETWORK:CLOUD_DID_REQUEST_SUCCEED
 *
 * 0x7BAB29B9355651B7

 * 
 * ------------------------------------------------------------------
 * @param {number} requestID
 * @returns {boolean}  
 */
export function cloudDidRequestSucceed(requestID: number): boolean {
	const cloudDidRequestSucceed_result = Citizen.invokeNative<boolean>('0x7BAB29B9355651B7', requestID);
	return cloudDidRequestSucceed_result;
}