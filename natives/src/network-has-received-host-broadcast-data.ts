/**
 * NETWORK:NETWORK_HAS_RECEIVED_HOST_BROADCAST_DATA
 *
 * 0x37F4AB46DE999660

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkHasReceivedHostBroadcastData(): boolean {
	const networkHasReceivedHostBroadcastData_result = Citizen.invokeNative<boolean>('0x37F4AB46DE999660', );
	return networkHasReceivedHostBroadcastData_result;
}