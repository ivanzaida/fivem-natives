/**
 * CFX:UNREGISTER_RAW_NUI_CALLBACK
 *
 * 0X7FB46432

 * Will unregister and cleanup a registered NUI callback handler.Use along side the REGISTER_RAW_NUI_CALLBACK native.
 * 
 * ------------------------------------------------------------------
 * @param {string} callbackType The callback type to target
 */
export function unregisterRawNuiCallback(callbackType: string): void {
	const unregisterRawNuiCallback_result = Citizen.invokeNative<void>('0X7FB46432', callbackType);
	return unregisterRawNuiCallback_result;
}