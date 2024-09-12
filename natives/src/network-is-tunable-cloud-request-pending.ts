/**
 * NETWORK:NETWORK_IS_TUNABLE_CLOUD_REQUEST_PENDING
 *
 * 0x1DD7AFEBE9FED010

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsTunableCloudRequestPending(): boolean {
	const networkIsTunableCloudRequestPending_result = Citizen.invokeNative<boolean>('0x1DD7AFEBE9FED010', );
	return networkIsTunableCloudRequestPending_result;
}