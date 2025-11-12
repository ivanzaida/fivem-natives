/**
 * MISC:SET_CONTENT_ID_INDEX
 *
 * 0xF0F077286626CEBB

 * 
 * Insert index of content id into the global hash table
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} contentIdHash
 * @param {number} index
 */
export function setContentIdIndex(contentIdHash: number, index: number): void {
	const setContentIdIndex_result = Citizen.invokeNative<void>('0xF0F077286626CEBB', contentIdHash, index);
	return setContentIdIndex_result;
}