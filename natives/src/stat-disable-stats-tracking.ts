/**
 * STATS:STAT_DISABLE_STATS_TRACKING
 *
 * 0x7D809DF9CCA503F0

 * 
 * Disable the tracking of the stats.
 * This is useful when in some mission we have a particular situation that could mess with the stats, ex : B1955817
 * Does nothing if already disabled
 * 
 * Prevents updates to CStatsMgr (e.g., STAT_SET_ natives)
 * 
 * 
 * ------------------------------------------------------------------
 */
export function statDisableStatsTracking(): void {
	const statDisableStatsTracking_result = Citizen.invokeNative<void>('0x7D809DF9CCA503F0', );
	return statDisableStatsTracking_result;
}