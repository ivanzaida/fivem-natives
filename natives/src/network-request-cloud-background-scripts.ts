/**
 * NETWORK:NETWORK_REQUEST_CLOUD_BACKGROUND_SCRIPTS
 *
 * 0x099F525995A2FD5E

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkRequestCloudBackgroundScripts(): boolean {
	const networkRequestCloudBackgroundScripts_result = Citizen.invokeNative<boolean>('0x099F525995A2FD5E', );
	return networkRequestCloudBackgroundScripts_result;
}