/**
 * NETWORK:UGC_GET_CONTENT_USER_NAME
 *
 * 0xA97D041A0700AC71

 * 
 * ------------------------------------------------------------------
 * @param {number} content
 * @returns {string}  
 */
export function ugcGetContentUserName(content: number): string {
	const ugcGetContentUserName_result = Citizen.invokeNative<string>('0xA97D041A0700AC71', content);
	return ugcGetContentUserName_result;
}