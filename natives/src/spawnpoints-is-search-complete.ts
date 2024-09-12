/**
 * PED:SPAWNPOINTS_IS_SEARCH_COMPLETE
 *
 * 0x35705F8A1AB3E367

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function spawnpointsIsSearchComplete(): boolean {
	const spawnpointsIsSearchComplete_result = Citizen.invokeNative<boolean>('0x35705F8A1AB3E367', );
	return spawnpointsIsSearchComplete_result;
}