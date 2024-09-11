/**
 * STATS:STAT_LOAD_PENDING
 *
 * 0x944042019AAAD145

 * 
 * ------------------------------------------------------------------
 * @param {number} slot
 * @returns {boolean}  
 */
export function statLoadPending(slot: number = 1): boolean {
	const statLoadPending_result = Citizen.invokeNative<boolean>('0x944042019AAAD145', slot);
	return statLoadPending_result;
}