/**
 * NETWORK:NETWORK_GET_NUM_TRANSITION_NON_ASYNC_GAMERS
 *
 * 0x1F97DCD0259BD8BB

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function networkGetNumTransitionNonAsyncGamers(): number {
	const networkGetNumTransitionNonAsyncGamers_result = Citizen.invokeNative<number>('0x1F97DCD0259BD8BB', );
	return networkGetNumTransitionNonAsyncGamers_result;
}