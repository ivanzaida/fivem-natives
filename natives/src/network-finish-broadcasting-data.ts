/**
 * NETWORK:NETWORK_FINISH_BROADCASTING_DATA
 *
 * 0x40442590673371C9

 * 
 * ------------------------------------------------------------------
 */
export function networkFinishBroadcastingData(): void {
	const networkFinishBroadcastingData_result = Citizen.invokeNative<void>('0x40442590673371C9', );
	return networkFinishBroadcastingData_result;
}