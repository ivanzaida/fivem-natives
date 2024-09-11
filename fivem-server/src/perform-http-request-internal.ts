/**
 * CFX:PERFORM_HTTP_REQUEST_INTERNAL
 *
 * 0X8E8CC653

 * 
 * ------------------------------------------------------------------
 * @param {string} requestData
 * @param {number} requestDataLength
 * @returns {number}  
 */
export function performHttpRequestInternal(requestData: string, requestDataLength: number): number {
	const performHttpRequestInternal_result = Citizen.invokeNative<number>('0X8E8CC653', requestData, requestDataLength);
	return performHttpRequestInternal_result;
}