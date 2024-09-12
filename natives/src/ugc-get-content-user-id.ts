/**
 * NETWORK:UGC_GET_CONTENT_USER_ID
 *
 * 0x4A5B5E00528FADB4

 * 
 * ------------------------------------------------------------------
 * @param {number} content
 * @returns {string}  
 */
export function ugcGetContentUserId(content: number): string {
	const ugcGetContentUserId_result = Citizen.invokeNative<string>('0x4A5B5E00528FADB4', content);
	return ugcGetContentUserId_result;
}