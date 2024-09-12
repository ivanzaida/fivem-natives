/**
 * NETWORK:UGC_REQUEST_CONTENT_DATA_FROM_INDEX
 *
 * 0x171DF6A0C07FB3DC

 * 
 * ------------------------------------------------------------------
 * @param {number} content
 * @param {number} fileID
 * @returns {number}  
 */
export function ugcRequestContentDataFromIndex(content: number, fileID: number): number {
	const ugcRequestContentDataFromIndex_result = Citizen.invokeNative<number>('0x171DF6A0C07FB3DC', content, fileID);
	return ugcRequestContentDataFromIndex_result;
}