/**
 * NETWORK:UGC_REQUEST_CACHED_DESCRIPTION
 *
 * 0x52DCAA722383A060

 * 
 * ------------------------------------------------------------------
 * @param {number} hash
 * @returns {number}  
 */
export function ugcRequestCachedDescription(hash: number): number {
	const ugcRequestCachedDescription_result = Citizen.invokeNative<number>('0x52DCAA722383A060', hash);
	return ugcRequestCachedDescription_result;
}