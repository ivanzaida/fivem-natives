/**
 * NETWORK:UGC_GET_CONTENT_HAS_LO_RES_PHOTO
 *
 * 0xFFEDCFBF2A7D07DE

 * 
 * ------------------------------------------------------------------
 * @param {number} content
 * @returns {boolean}  
 */
export function ugcGetContentHasLoResPhoto(content: number): boolean {
	const ugcGetContentHasLoResPhoto_result = Citizen.invokeNative<boolean>('0xFFEDCFBF2A7D07DE', content);
	return ugcGetContentHasLoResPhoto_result;
}