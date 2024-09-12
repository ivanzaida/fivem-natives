/**
 * NETWORK:NETWORK_IS_CABLE_CONNECTED
 *
 * 0x6B47B305B6557EF9

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsCableConnected(): boolean {
	const networkIsCableConnected_result = Citizen.invokeNative<boolean>('0x6B47B305B6557EF9', );
	return networkIsCableConnected_result;
}