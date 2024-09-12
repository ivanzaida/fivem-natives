/**
 * NETWORK:NETWORK_IS_SESSION_ACTIVE
 *
 * 0x7B3F26F5D11BF3BE

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsSessionActive(): boolean {
	const networkIsSessionActive_result = Citizen.invokeNative<boolean>('0x7B3F26F5D11BF3BE', );
	return networkIsSessionActive_result;
}