/**
 * NETWORK:NETWORK_IS_PLATFORM_SUBSCRIPTION_CHECK_PENDING
 *
 * 0x6C8E92D4F56B150E

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsPlatformSubscriptionCheckPending(): boolean {
	const networkIsPlatformSubscriptionCheckPending_result = Citizen.invokeNative<boolean>('0x6C8E92D4F56B150E', );
	return networkIsPlatformSubscriptionCheckPending_result;
}