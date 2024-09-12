/**
 * NETWORK:CLOUD_IS_CHECKING_AVAILABILITY
 *
 * 0x722F601C8C71A90A

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function cloudIsCheckingAvailability(): boolean {
	const cloudIsCheckingAvailability_result = Citizen.invokeNative<boolean>('0x722F601C8C71A90A', );
	return cloudIsCheckingAvailability_result;
}