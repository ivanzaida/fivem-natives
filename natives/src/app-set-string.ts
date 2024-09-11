/**
 * APP:APP_SET_STRING
 *
 * 0x792060B1E40FC4C2

 * 
 * ------------------------------------------------------------------
 * @param {string} name
 * @param {string} value
 */
export function appSetString(name: string, value: string): void {
	const appSetString_result = Citizen.invokeNative<void>('0x792060B1E40FC4C2', name, value);
	return appSetString_result;
}