/**
 * NETWORK:UGC_WAS_QUERY_FORCE_CANCELLED
 *
 * 0xCFB101E40FBA6A5A

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function ugcWasQueryForceCancelled(): boolean {
	const ugcWasQueryForceCancelled_result = Citizen.invokeNative<boolean>('0xCFB101E40FBA6A5A', );
	return ugcWasQueryForceCancelled_result;
}