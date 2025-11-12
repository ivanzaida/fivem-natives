/**
 * NETWORK:NETWORK_GET_TIMEOUT_TIME
 *
 * 0x6145620349FC9F57

 * 
 * Returns the time in seconds that the code will wait for an unresponding player before disconnecting them.
 * If -notimeouts is being used, this will return 0.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function networkGetTimeoutTime(): number {
	const networkGetTimeoutTime_result = Citizen.invokeNative<number>('0x6145620349FC9F57', );
	return networkGetTimeoutTime_result;
}