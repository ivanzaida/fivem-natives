/**
 * NETWORK:UGC_GET_CONTENT_RATING_NEGATIVE_COUNT
 *
 * 0xAA565F77BB458AFD

 * 
 * ------------------------------------------------------------------
 * @param {number} content
 * @param {boolean} xv
 * @returns {number}  
 */
export function ugcGetContentRatingNegativeCount(content: number, xv: boolean): number {
	const ugcGetContentRatingNegativeCount_result = Citizen.invokeNative<number>('0xAA565F77BB458AFD', content, xv);
	return ugcGetContentRatingNegativeCount_result;
}