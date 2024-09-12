/**
 * NETWORK:UGC_GET_CONTENT_HAS_PLAYER_BOOKMARKED
 *
 * 0x0DA829364F715C68

 * 
 * ------------------------------------------------------------------
 * @param {number} content
 * @returns {boolean}  
 */
export function ugcGetContentHasPlayerBookmarked(content: number): boolean {
	const ugcGetContentHasPlayerBookmarked_result = Citizen.invokeNative<boolean>('0x0DA829364F715C68', content);
	return ugcGetContentHasPlayerBookmarked_result;
}