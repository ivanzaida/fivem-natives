/**
 * NETWORK:UGC_SET_BOOKMARKED
 *
 * 0xE3E138A155ACC0B9

 * 
 * ------------------------------------------------------------------
 * @param {string} szContentID
 * @param {boolean} isBookmarked
 * @param {string} szContentType
 * @returns {boolean}  
 */
export function ugcSetBookmarked(szContentID: string, isBookmarked: boolean, szContentType: string): boolean {
	const ugcSetBookmarked_result = Citizen.invokeNative<boolean>('0xE3E138A155ACC0B9', szContentID, isBookmarked, szContentType);
	return ugcSetBookmarked_result;
}