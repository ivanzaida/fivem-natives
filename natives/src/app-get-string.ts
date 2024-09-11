/**
 * APP:APP_GET_STRING
 *
 * 0x9C05D47937B35A7C

 * 
 * ------------------------------------------------------------------
 * @param {string} name
 * @returns {string}  
 */
export function appGetString(name: string): string {
	const appGetString_result = Citizen.invokeNative<string>('0x9C05D47937B35A7C', name);
	return appGetString_result;
}