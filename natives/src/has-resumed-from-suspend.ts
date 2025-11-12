/**
 * MISC:HAS_RESUMED_FROM_SUSPEND
 *
 * 0x801039B3B8E28F8D

 * 
 * Hardcoded to return false.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function hasResumedFromSuspend(): boolean {
	const hasResumedFromSuspend_result = Citizen.invokeNative<boolean>('0x801039B3B8E28F8D', );
	return hasResumedFromSuspend_result;
}