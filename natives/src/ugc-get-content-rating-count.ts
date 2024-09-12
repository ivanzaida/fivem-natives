/**
 * NETWORK:UGC_GET_CONTENT_RATING_COUNT
 *
 * 0x909B2EE8AF324A1D

 * 
 * ------------------------------------------------------------------
 * @param {number} content
 * @param {boolean} xv
 * @returns {number}  
 */
export function ugcGetContentRatingCount(content: number, xv: boolean): number {
	const ugcGetContentRatingCount_result = Citizen.invokeNative<number>('0x909B2EE8AF324A1D', content, xv);
	return ugcGetContentRatingCount_result;
}