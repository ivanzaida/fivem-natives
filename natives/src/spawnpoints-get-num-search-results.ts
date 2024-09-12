/**
 * PED:SPAWNPOINTS_GET_NUM_SEARCH_RESULTS
 *
 * 0x53367B4589EB191D

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function spawnpointsGetNumSearchResults(): number {
	const spawnpointsGetNumSearchResults_result = Citizen.invokeNative<number>('0x53367B4589EB191D', );
	return spawnpointsGetNumSearchResults_result;
}