/**
 * NETWORK:NETWORK_HAVE_PLATFORM_SUBSCRIPTION
 *
 * 0x47C5F1CAA6A07D67

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkHavePlatformSubscription(): boolean {
	const networkHavePlatformSubscription_result = Citizen.invokeNative<boolean>('0x47C5F1CAA6A07D67', );
	return networkHavePlatformSubscription_result;
}