/**
 * STATS:STAT_SAVE_PENDING
 *
 * 0xA0BF4C723F7D0831

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function statSavePending(): boolean {
	const statSavePending_result = Citizen.invokeNative<boolean>('0xA0BF4C723F7D0831', );
	return statSavePending_result;
}