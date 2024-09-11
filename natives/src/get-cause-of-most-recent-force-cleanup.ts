/**
 * PLAYER:GET_CAUSE_OF_MOST_RECENT_FORCE_CLEANUP
 *
 * 0x36E4BBBE16306470

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getCauseOfMostRecentForceCleanup(): number {
	const getCauseOfMostRecentForceCleanup_result = Citizen.invokeNative<number>('0x36E4BBBE16306470', );
	return getCauseOfMostRecentForceCleanup_result;
}