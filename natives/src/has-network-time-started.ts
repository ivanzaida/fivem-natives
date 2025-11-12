/**
 * NETWORK:HAS_NETWORK_TIME_STARTED
 *
 * 0x8FE5240A69F17DF8

 * 
 * Returns whether network clock has started.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function hasNetworkTimeStarted(): boolean {
	const hasNetworkTimeStarted_result = Citizen.invokeNative<boolean>('0x8FE5240A69F17DF8', );
	return hasNetworkTimeStarted_result;
}