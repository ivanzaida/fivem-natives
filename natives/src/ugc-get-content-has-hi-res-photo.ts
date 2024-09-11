/**
 * NETWORK:UGC_GET_CONTENT_HAS_HI_RES_PHOTO
 *
 * 0xA049DE72EC734E79

 * 
 * ------------------------------------------------------------------
 * @param {number} content
 * @returns {boolean}  
 */
export function ugcGetContentHasHiResPhoto(content: number): boolean {
	const ugcGetContentHasHiResPhoto_result = Citizen.invokeNative<boolean>('0xA049DE72EC734E79', content);
	return ugcGetContentHasHiResPhoto_result;
}