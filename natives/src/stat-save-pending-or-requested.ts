/**
 * STATS:STAT_SAVE_PENDING_OR_REQUESTED
 *
 * 0xFF94E450D8F794CD

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function statSavePendingOrRequested(): boolean {
	const statSavePendingOrRequested_result = Citizen.invokeNative<boolean>('0xFF94E450D8F794CD', );
	return statSavePendingOrRequested_result;
}