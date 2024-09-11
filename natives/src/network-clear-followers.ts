/**
 * NETWORK:NETWORK_CLEAR_FOLLOWERS
 *
 * 0x9758CB6BB2E4700F

 * 
 * ------------------------------------------------------------------
 */
export function networkClearFollowers(): void {
	const networkClearFollowers_result = Citizen.invokeNative<void>('0x9758CB6BB2E4700F', );
	return networkClearFollowers_result;
}