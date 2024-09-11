/**
 * CFX:REGISTER_RAW_NUI_CALLBACK
 *
 * 0XA8AE9C2F

 * 
 * ------------------------------------------------------------------
 * @param {string} callbackType
 * @param {Function} callback
 */
export function registerRawNuiCallback(callbackType: string, callback: Function): void {
	const registerRawNuiCallback_result = Citizen.invokeNative<void>('0XA8AE9C2F', callbackType, callback);
	return registerRawNuiCallback_result;
}