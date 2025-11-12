/**
 * NETWORK:NETWORK_DISABLE_REALTIME_MULTIPLAYER
 *
 * 0xF4DE15907AAE2E3A

 * 
 * Realtime Multiplayer
 * This should be called every frame that real time multiplayer should be disabled
 * 
 * 
 * ------------------------------------------------------------------
 */
export function networkDisableRealtimeMultiplayer(): void {
	const networkDisableRealtimeMultiplayer_result = Citizen.invokeNative<void>('0xF4DE15907AAE2E3A', );
	return networkDisableRealtimeMultiplayer_result;
}