/**
 * PED:SPAWNPOINTS_IS_SEARCH_FAILED
 *
 * 0x54CEFF81D65925A1

 * 
 * Returns TRUE if a search is in the failed state.  Will assert if no search is active
 * A search may enter the failed state if its duration exceeds the option iMaxSearchDuration specified when the search begins.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function spawnpointsIsSearchFailed(): boolean {
	const spawnpointsIsSearchFailed_result = Citizen.invokeNative<boolean>('0x54CEFF81D65925A1', );
	return spawnpointsIsSearchFailed_result;
}