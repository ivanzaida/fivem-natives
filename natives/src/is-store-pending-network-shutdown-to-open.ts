/**
 * HUD:IS_STORE_PENDING_NETWORK_SHUTDOWN_TO_OPEN
 *
 * 0x4CEC1EF3DCEEDD1C

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isStorePendingNetworkShutdownToOpen(): boolean {
	const isStorePendingNetworkShutdownToOpen_result = Citizen.invokeNative<boolean>('0x4CEC1EF3DCEEDD1C', );
	return isStorePendingNetworkShutdownToOpen_result;
}