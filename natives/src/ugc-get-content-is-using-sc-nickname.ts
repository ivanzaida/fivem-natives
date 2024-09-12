/**
 * NETWORK:UGC_GET_CONTENT_IS_USING_SC_NICKNAME
 *
 * 0xD497BCA3B9495BB9

 * 
 * ------------------------------------------------------------------
 * @param {number} content
 * @returns {boolean}  
 */
export function ugcGetContentIsUsingScNickname(content: number): boolean {
	const ugcGetContentIsUsingScNickname_result = Citizen.invokeNative<boolean>('0xD497BCA3B9495BB9', content);
	return ugcGetContentIsUsingScNickname_result;
}