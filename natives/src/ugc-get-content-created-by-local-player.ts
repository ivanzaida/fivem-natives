/**
 * NETWORK:UGC_GET_CONTENT_CREATED_BY_LOCAL_PLAYER
 *
 * 0xB678B17485F07C58

 * 
 * ------------------------------------------------------------------
 * @param {number} content
 * @returns {boolean}  
 */
export function ugcGetContentCreatedByLocalPlayer(content: number): boolean {
	const ugcGetContentCreatedByLocalPlayer_result = Citizen.invokeNative<boolean>('0xB678B17485F07C58', content);
	return ugcGetContentCreatedByLocalPlayer_result;
}