/**
 * MISC:GET_CONTENT_ID_INDEX
 *
 * 0xEAA437DE2A801E8A

 * 
 * Returns index of content id from the global hash table
 * if content id is not found, -1 is returned
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} contentIdHash
 * @returns {number}  
 */
export function getContentIdIndex(contentIdHash: number): number {
	const getContentIdIndex_result = Citizen.invokeNative<number>('0xEAA437DE2A801E8A', contentIdHash);
	return getContentIdIndex_result;
}