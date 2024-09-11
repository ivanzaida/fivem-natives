/**
 * NETWORK:NETWORK_GET_NUMBER_BODY_TRACKER_HITS
 *
 * 0xBA8E86ED610D8A3C

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function networkGetNumberBodyTrackerHits(): number {
	const networkGetNumberBodyTrackerHits_result = Citizen.invokeNative<number>('0xBA8E86ED610D8A3C', );
	return networkGetNumberBodyTrackerHits_result;
}