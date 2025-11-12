/**
 * NETWORK:NETWORK_IS_NP_AVAILABLE
 *
 * 0xECBFC40AE72FA489

 * 
 * Returns TRUE if the NP (online) operations are available for the local player. This will
 * be FALSE if the player is underage, has a pending game or title update.
 * 
 * This function is hard-coded to always return 1.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsNpAvailable(): boolean {
	const networkIsNpAvailable_result = Citizen.invokeNative<boolean>('0xECBFC40AE72FA489', );
	return networkIsNpAvailable_result;
}