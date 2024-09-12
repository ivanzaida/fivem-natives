/**
 * NETWORK:NETWORK_IS_CLOUD_AVAILABLE
 *
 * 0x5676319ACE5BEC37

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsCloudAvailable(): boolean {
	const networkIsCloudAvailable_result = Citizen.invokeNative<boolean>('0x5676319ACE5BEC37', );
	return networkIsCloudAvailable_result;
}