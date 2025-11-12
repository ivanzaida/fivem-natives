/**
 * NETWORK:RESET_STORE_NETWORK_GAME_TRACKING
 *
 * 0x2A878DDB1FE0F636

 * 
 * Resets network game tracking in the store.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function resetStoreNetworkGameTracking(): void {
	const resetStoreNetworkGameTracking_result = Citizen.invokeNative<void>('0x2A878DDB1FE0F636', );
	return resetStoreNetworkGameTracking_result;
}