/**
 * STATS:STAT_ENABLE_STATS_TRACKING
 *
 * 0x1E132C341165F83E

 * 
 * Does nothing if already enabled
 * 
 * 
 * ------------------------------------------------------------------
 */
export function statEnableStatsTracking(): void {
	const statEnableStatsTracking_result = Citizen.invokeNative<void>('0x1E132C341165F83E', );
	return statEnableStatsTracking_result;
}