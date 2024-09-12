/**
 * NETWORK:NETWORK_IS_IN_SESSION
 *
 * 0xBF52D447C795492B

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsInSession(): boolean {
	const networkIsInSession_result = Citizen.invokeNative<boolean>('0xBF52D447C795492B', );
	return networkIsInSession_result;
}