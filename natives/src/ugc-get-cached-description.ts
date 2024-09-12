/**
 * NETWORK:UGC_GET_CACHED_DESCRIPTION
 *
 * 0x1B4FD4A821EC277E

 * 
 * ------------------------------------------------------------------
 * @param {number} hash
 * @param {number} maxLength
 * @returns {string}  
 */
export function ugcGetCachedDescription(hash: number, maxLength: number): string {
	const ugcGetCachedDescription_result = Citizen.invokeNative<string>('0x1B4FD4A821EC277E', hash, maxLength);
	return ugcGetCachedDescription_result;
}