/**
 * NETWORK:UGC_GET_CONTENT_IS_PUBLISHED
 *
 * 0xDECDB93AECF4571C

 * 
 * ------------------------------------------------------------------
 * @param {number} content
 * @returns {boolean}  
 */
export function ugcGetContentIsPublished(content: number): boolean {
	const ugcGetContentIsPublished_result = Citizen.invokeNative<boolean>('0xDECDB93AECF4571C', content);
	return ugcGetContentIsPublished_result;
}