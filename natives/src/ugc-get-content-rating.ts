/**
 * NETWORK:UGC_GET_CONTENT_RATING
 *
 * 0xCF073B4FF8828B7E

 * 
 * ------------------------------------------------------------------
 * @param {number} content
 * @param {boolean} xv
 * @returns {number}  
 */
export function ugcGetContentRating(content: number, xv: boolean): number {
	const ugcGetContentRating_result = Citizen.invokeNative<number>('0xCF073B4FF8828B7E', content, xv);
	return ugcGetContentRating_result;
}