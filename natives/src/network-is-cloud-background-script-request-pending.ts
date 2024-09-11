/**
 * NETWORK:NETWORK_IS_CLOUD_BACKGROUND_SCRIPT_REQUEST_PENDING
 *
 * 0x3B952A9A844B63C6

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsCloudBackgroundScriptRequestPending(): boolean {
	const networkIsCloudBackgroundScriptRequestPending_result = Citizen.invokeNative<boolean>('0x3B952A9A844B63C6', );
	return networkIsCloudBackgroundScriptRequestPending_result;
}