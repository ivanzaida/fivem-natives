/**
 * NETWORK:UGC_GET_CONTENT_RATING_POSITIVE_COUNT
 *
 * 0x7EB4730FA964B592

 * 
 * ------------------------------------------------------------------
 * @param {number} content
 * @param {boolean} xv
 * @returns {number}  
 */
export function ugcGetContentRatingPositiveCount(content: number, xv: boolean): number {
	const ugcGetContentRatingPositiveCount_result = Citizen.invokeNative<number>('0x7EB4730FA964B592', content, xv);
	return ugcGetContentRatingPositiveCount_result;
}