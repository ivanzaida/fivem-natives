/**
 * NETWORK:UGC_GET_CONTENT_HAS_PLAYER_RECORD
 *
 * 0x821D66CE02BC23F8

 * 
 * Whether the local player has a record
 * This won't be the case until the player has rated, bookmarked or set player data
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} content
 * @returns {boolean}  
 */
export function ugcGetContentHasPlayerRecord(content: number): boolean {
	const ugcGetContentHasPlayerRecord_result = Citizen.invokeNative<boolean>('0x821D66CE02BC23F8', content);
	return ugcGetContentHasPlayerRecord_result;
}