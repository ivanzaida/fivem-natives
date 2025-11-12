/**
 * STATS:STAT_IS_STATS_TRACKING_ENABLED
 *
 * 0x672D6F3E8E916DB5

 * 
 * -
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function statIsStatsTrackingEnabled(): boolean {
	const statIsStatsTrackingEnabled_result = Citizen.invokeNative<boolean>('0x672D6F3E8E916DB5', );
	return statIsStatsTrackingEnabled_result;
}