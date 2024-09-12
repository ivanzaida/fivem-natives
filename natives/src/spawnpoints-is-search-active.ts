/**
 * PED:SPAWNPOINTS_IS_SEARCH_ACTIVE
 *
 * 0xBC88293FA9783DEB

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function spawnpointsIsSearchActive(): boolean {
	const spawnpointsIsSearchActive_result = Citizen.invokeNative<boolean>('0xBC88293FA9783DEB', );
	return spawnpointsIsSearchActive_result;
}