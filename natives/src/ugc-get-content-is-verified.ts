/**
 * NETWORK:UGC_GET_CONTENT_IS_VERIFIED
 *
 * 0xE72957406FBFB362

 * 
 * ------------------------------------------------------------------
 * @param {number} content
 * @returns {boolean}  
 */
export function ugcGetContentIsVerified(content: number): boolean {
	const ugcGetContentIsVerified_result = Citizen.invokeNative<boolean>('0xE72957406FBFB362', content);
	return ugcGetContentIsVerified_result;
}