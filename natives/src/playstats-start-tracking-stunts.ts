/**
 * STATS:PLAYSTATS_START_TRACKING_STUNTS
 *
 * 0x4C7D89621410F77E

 * 
 * Allows CEventNetworkStuntPerformed to be triggered.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function playstatsStartTrackingStunts(): void {
	const playstatsStartTrackingStunts_result = Citizen.invokeNative<void>('0x4C7D89621410F77E', );
	return playstatsStartTrackingStunts_result;
}