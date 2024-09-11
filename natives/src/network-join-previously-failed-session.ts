/**
 * NETWORK:NETWORK_JOIN_PREVIOUSLY_FAILED_SESSION
 *
 * 0x68CB8278CA2DB28D

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkJoinPreviouslyFailedSession(): boolean {
	const networkJoinPreviouslyFailedSession_result = Citizen.invokeNative<boolean>('0x68CB8278CA2DB28D', );
	return networkJoinPreviouslyFailedSession_result;
}