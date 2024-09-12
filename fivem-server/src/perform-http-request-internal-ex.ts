/**
 * CFX:PERFORM_HTTP_REQUEST_INTERNAL_EX
 *
 * 0x6B171E87

 * 
 * ------------------------------------------------------------------
 * @param {any} requestData
 * @returns {number}  
 */
export function performHttpRequestInternalEx(requestData: any): number {
	const performHttpRequestInternalEx_result = Citizen.invokeNative<number>('0x6B171E87', requestData);
	return performHttpRequestInternalEx_result;
}