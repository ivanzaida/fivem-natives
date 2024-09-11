/**
 * NETWORK:NETWORK_IS_SESSION_BUSY
 *
 * 0xAB8F1746453732A4

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsSessionBusy(): boolean {
	const networkIsSessionBusy_result = Citizen.invokeNative<boolean>('0xAB8F1746453732A4', );
	return networkIsSessionBusy_result;
}