/**
 * NETWORK:CLOUD_GET_AVAILABILITY_CHECK_RESULT
 *
 * 0x194647F86ACF56D4

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function cloudGetAvailabilityCheckResult(): boolean {
	const cloudGetAvailabilityCheckResult_result = Citizen.invokeNative<boolean>('0x194647F86ACF56D4', );
	return cloudGetAvailabilityCheckResult_result;
}