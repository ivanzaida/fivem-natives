/**
 * CFX:REGISTER_NUI_CALLBACK_TYPE
 *
 * 0xCD03CDA9

 * 
 * ------------------------------------------------------------------
 * @param {string} callbackType
 */
export function registerNuiCallbackType(callbackType: string): void {
	const registerNuiCallbackType_result = Citizen.invokeNative<void>('0xCD03CDA9', callbackType);
	return registerNuiCallbackType_result;
}