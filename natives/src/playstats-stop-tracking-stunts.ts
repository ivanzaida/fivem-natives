/**
 * STATS:PLAYSTATS_STOP_TRACKING_STUNTS
 *
 * 0x50BF6070C8D9F49F

 * 
 * Disallows CEventNetworkStuntPerformed to be triggered.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function playstatsStopTrackingStunts(): void {
	const playstatsStopTrackingStunts_result = Citizen.invokeNative<void>('0x50BF6070C8D9F49F', );
	return playstatsStopTrackingStunts_result;
}