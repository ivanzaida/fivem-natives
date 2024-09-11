/**
 * STATS:STAT_LOAD
 *
 * 0x2D1E9C333C5B2D4B

 * 
 * ------------------------------------------------------------------
 * @param {number} slot
 * @returns {boolean}  
 */
export function statLoad(slot: number): boolean {
	const statLoad_result = Citizen.invokeNative<boolean>('0x2D1E9C333C5B2D4B', slot);
	return statLoad_result;
}